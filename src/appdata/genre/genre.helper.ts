import { Types } from 'mongoose';
import genreModel from './genre.model';
export const getGenreById = async (_id: Types.ObjectId) => {

  return await genreModel.findById(_id);

};
