import { Types } from 'mongoose';
export interface Igenre {
  _id: Types.ObjectId;
  user: Types.ObjectId;
  genre: Types.ObjectId;
  createdAt: string;
  updatedAt: string;
}
