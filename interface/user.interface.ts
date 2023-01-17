import { Schema } from 'mongoose';

export interface Iuser {
  password: string;
  email: string;
  genre: [];
  gender: string;
  age: number;
  firstname: string;
  lastname: string;
  _id: Schema.Types.ObjectId;
}

export interface IuserPayload {
  password?: string;
  email?: string;
  genre?: [];
  gender?: string;
  age?: number;
  firstname?: string;
  lastname?: string;
  _id?: Schema.Types.ObjectId;
  resetPasswordToken?: string | null;
  isNeedToChangePassword?: boolean;
}
