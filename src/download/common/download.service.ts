import { addMylist } from './download.helper';
import { CommonerrorHandler } from '../../../utils/errorHandler';
import { ImylistFilm } from '../../../interface/media.interface';

export const addMylistService = async (
  payload: ImylistFilm,
  userId: string,
) => {

  try {

    const data = await addMylist(payload, userId);
    return data;

  } catch (error) {

    console.log(error, 'error from service');
    CommonerrorHandler(error);

  }

};
