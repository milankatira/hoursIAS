import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

export const getTokenForEmailVarification = (payload: object) => {

  const token = jwt.sign(
    payload,
    process.env.JWT_PRIVATE_KEY as unknown as string,
    {
      expiresIn: '7d',
    },
  );
  return token;

};

export const createJWTToken = (userData: {
  id: Types.ObjectId;
  email: string;
}) => {

  try {

    const token = jwt.sign(
      {
        id: userData.id,
        email: userData.email,
      },
      process.env.JWT_PRIVATE_KEY as unknown as string,
      { expiresIn: '30d' },
    );
    return token;

  } catch (error) {

    throw {
      errorMsg: 'ERROR IN CREATING TOKEN',
    };

  }

};
