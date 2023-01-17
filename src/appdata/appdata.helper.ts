import genderModel from './gender/gender.model';
import genreModel from './genre/genre.model';

export const getappData = async () => {

  const gender = await genderModel.find();
  const genre = await genreModel.find();
  return { gender, genre };

};
