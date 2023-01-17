import genderModel from '../src/appdata/gender/gender.model';

const genders = [
  new genderModel({
    name: 'Man',
  }),
  new genderModel({
    name: 'Woman',
  }),
  new genderModel({
    name: 'Transgender',
  }),
  new genderModel({
    name: 'Non-binary/non-conforming',
  }),
  new genderModel({
    name: 'Prefer not to respond',
  }),
];

const addGender = async () => {

  await genderModel.insertMany(genders);
  console.log('genders are added.');

};

export default addGender;
