import * as dotenv from 'dotenv';
import addGender from './gender';
import addGenre from './genre';
import addProvider from './provider';
import { db } from '../config/db';
dotenv.config();

export const seed = async () => {

  await db();
  await addGender();
  await addGenre();
  await addProvider();

};

seed();
