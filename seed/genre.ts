import genreModel from '../src/appdata/genre/genre.model';

const genders = [
  new genreModel({
    name: 'Music',
    image: 'static/signup/music.png',
  }),
  new genreModel({
    name: 'News',
    image: 'static/signup/newz.png',
  }),
  new genreModel({
    name: 'Talk',
    image: 'static/signup/talk.png',
  }),
  new genreModel({
    name: 'Sports',
    image: 'static/signup/sports.png',
  }),
  new genreModel({
    name: 'Business',
    image: 'static/signup/business.png',
  }),
  new genreModel({
    name: 'Documentry',
    image: 'static/signup/documentry.png',
  }),
];

const addGenre = async () => {

  await genreModel.insertMany(genders);
  console.log('genre are added.');

};

export default addGenre;
