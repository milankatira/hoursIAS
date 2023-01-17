import mongoose from 'mongoose';
import { MONGOURL, serverUrl } from './main.config';

export const db = async () => {

  try {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await mongoose.connect(MONGOURL);

    console.log('Mongodb connected successfully.', MONGOURL);

  } catch (error) {

    console.log(process.env.MONGODB_URI);
    console.log('Database connection error: ', error);

  }

};
