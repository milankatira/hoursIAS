import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';
import hogan from 'hogan.js';
import { ObjectId, Types } from 'mongoose';
import path from 'path';
import fs from 'fs';
import { Iuser } from './../../interface/user.interface';
import { errorHandler } from './../../utils/errorHandler';
import { errorMessage } from './../../constant/error';
import { addUser, findByIdAndUpdate, findSingleUser } from './user.helper';
import { getGenreById } from '../appdata/genre/genre.helper';
import { getGenderById } from '../appdata/gender/gender.helper';
import { clientUrl, serverUrl } from '../../config/main.config';
import { sendEmail } from '../../utils/sendEmail';
import {
  createJWTToken,
  getTokenForEmailVarification,
} from '../../utils/jwtUtils';
export const addUserService = async (payload: Iuser) => {

  try {

    const { password } = payload;
    const hashPassword = await bcrypt.hash(password, 14);
    const userData = await findSingleUser(
      { email: payload.email },
      { isLogin: false },
    );
    if (userData) throw { errorMsg: errorMessage.alreadyHaveAccount };

    const data = {
      ...payload,
      password: hashPassword,
    };
    const preferanceDataValidator = (preferanceData: Types.ObjectId[]) => {

      return Promise.all(
        preferanceData.map(async (item) => {

          const genre = await getGenreById(item);
          return genre;

        }),
      );

    };

    const validator = await preferanceDataValidator(payload.genre);
    if (validator.includes(null)) {

      throw { errorMsg: errorMessage.notFound('genre') };

    }

    const gender = await getGenderById(payload.gender);
    if (!gender) {

      throw { errorMsg: errorMessage.notFound('gender') };

    }
    const result = await addUser(data);
    const token = createJWTToken(result);
    result.token = token;
    await sendEmailVarificationService(payload.email);

    const user = JSON.parse(JSON.stringify(result));
    user.token = createJWTToken({
      id: result._id,
      email: result.email,
    });
    return user;

  } catch (error) {

    errorHandler(error);

  }

};

export const loginServices = async (email: string, password: string) => {

  try {

    const user = await findSingleUser({ email: email }, { isLogin: true });
    if (!user) {

      throw { errorMsg: errorMessage.userNotFound };

    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {

      throw {
        errorMsg: errorMessage.inCorrectPassword,
      };

    }

    const data = JSON.parse(JSON.stringify(user));
    data.token = createJWTToken({
      id: user._id,
      email: user.email,
    });
    delete data.password;
    return data;

  } catch (error) {

    errorHandler(error);

  }

};

export const checkUserServices = async (email: string) => {

  try {

    const user = await findSingleUser({ email: email }, { isLogin: false });
    if (user) {

      throw { errorMsg: errorMessage.alereadyHaveAccount };

    }

    return;

  } catch (error) {

    errorHandler(error);

  }

};

export const forgotPasswordService = async (email: string) => {

  try {

    const user = await findSingleUser({ email: email }, { isLogin: false });
    if (!user) {

      throw { errorMsg: errorMessage.userNotFound };

    }
    const forgotPassword = uuid();
    await findByIdAndUpdate(user._id, {
      isNeedToChangePassword: true,
      resetPasswordToken: forgotPassword,
    });
    const link = `${clientUrl}forgotpassword/${forgotPassword}`;
    const template = fs.readFileSync(
      path.join(__dirname, '../../email-template', 'reset-password.html'),
      'utf-8',
    );
    const compiledTemplate = hogan.compile(template);
    await sendEmail(
      user.email as string,
      'Revolt-summit - Reset Password',
      '',
      compiledTemplate.render({
        link,
      }),
      '',
      '',
    );

    return {
      status: true,
      message:
        'Please check your email, We sent an email with reset password link.',
    };

  } catch (error) {

    console.log(error);
    errorHandler(error);

  }

};

export const resetPasswordService = async (
  passwordLink: string,
  password: string,
) => {

  try {

    const user = await findSingleUser(
      { resetPasswordToken: passwordLink },
      { isLogin: false },
    );

    if (!user) throw { errorMsg: errorMessage.linkExpired };
    const hashPassword = await bcrypt.hash(password, 14);
    const packet = {
      resetPasswordToken: null,
      password: hashPassword,
      isEmailVerified: true,
      isNeedToChangePassword: false,
    };
    await findByIdAndUpdate(user._id, packet);
    const data = await loginServices(user.email, password);
    return data;

  } catch (error) {

    errorHandler(error);

  }

};

export const sendEmailVarificationService = async (email: string) => {

  try {

    const userData = await findSingleUser({ email }, { isLogin: false });
    if (!userData) throw { errorMsg: 'Email address not found' };
    if (userData.isEmailVerified)
      throw { errorMsg: errorMessage.alreadyVerify };

    const tokenForEmailVarification = await getTokenForEmailVarification({
      createdUser: userData._id,
    });
    const link = `${clientUrl}verify/${tokenForEmailVarification}?email=${userData.email}`;
    const template = fs.readFileSync(
      path.join(__dirname, '../../email-template', 'index.html'),
      'utf-8',
    );

    const compiledTemplate = hogan.compile(template);

    await sendEmail(
      userData.email,
      'Confirm Your Email',
      '',
      compiledTemplate.render({
        link,
        logoUrl: `${serverUrl}/static/logo.png`,
      }),
    );
    return {
      status: true,
      message: 'Verify your email using link sent to your email.',
    };

  } catch (error) {

    console.log(error, 'Error while verifying');
    throw {
      errorMsg: error,
    };

  }

};

export const verifyEmailService = async (token: string) => {

  try {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const decodedToken: { createdUser: string } = jwt.verify(
      token,
      process.env.JWT_PRIVATE_KEY as unknown as string,
    );
    if (!decodedToken || !decodedToken.createdUser) {

      throw {
        errorMsg: 'Invalid token',
      };

    }
    if (decodedToken && decodedToken?.createdUser) {

      const userDetails = await findSingleUser(
        {
          _id: decodedToken?.createdUser as unknown as ObjectId,
        },
        { isLogin: false },
      );
      if (!userDetails) {

        throw { errorMsg: errorMessage.notFound('user') };

      }
      if (userDetails.isEmailVerified) {

        throw {
          errorMsg: 'User is already verified',
        };

      }
      if (!userDetails.isEmailVerified) {

        userDetails.isEmailVerified = true;
        await userDetails.save();
        return {
          status: true,
          message: 'Valid token',
        };

      }

    }

  } catch (err) {

    throw {
      errorMsg: err,
    };

  }

};
