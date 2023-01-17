import genderModel from './gender.model';

export const getGenderById = async (_id: string) => {

  return await genderModel.findById(_id);

};
