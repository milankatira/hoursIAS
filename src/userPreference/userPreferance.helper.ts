import { Types } from 'mongoose';
import userPreferanceModal from './userPreferance.modal';
import genreModel from '../appdata/genre/genre.model';

export const inserManyuserPreference = async (
  payload: { user: Types.ObjectId; genre: Types.ObjectId }[],
) => {

  const data = await userPreferanceModal.insertMany(payload);
  const userPreferance = await userPreferanceModal.populate(data, {
    path: 'genre',
    model: genreModel,
    select: 'id name',
  });
  return userPreferance;

};
