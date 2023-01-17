import { Types } from 'mongoose';
import userSchema from '../user/user.model';
import { Iuser, IuserPayload } from '../../interface/user.interface';
import { passwordHandler } from '../../utils/passwordHandler';
import { inserManyuserPreference } from '../userPreference/userPreferance.helper';
import { errorHandler } from '../../utils/errorHandler';

export const addUser = async (payload: Iuser) => {

  try {

    const data = await userSchema.create(payload);
    const preferanceData = payload.genre.map((item: Types.ObjectId) => {

      return { user: data._id, genre: item };

    });
    const userPreferance = await inserManyuserPreference(preferanceData);
    if (data) {

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return passwordHandler(data, userPreferance);

    }

  } catch (error) {

    errorHandler(error);

  }

};

export const findUserById = async (userId: Types.ObjectId) => {

  return await userSchema.findById(userId);

};

export const findSingleUser = async (
  query: IuserPayload,
  islogin: { isLogin: boolean },
) => {

  if (islogin?.isLogin) {

    return await userSchema.findOne(query).select('+password');

  }
  return await userSchema.findOne(query);

};

export const findByIdAndUpdate = async (
  userId: Types.ObjectId,
  payload: IuserPayload,
) => {

  return userSchema.findByIdAndUpdate(userId, payload, { new: true });

};
