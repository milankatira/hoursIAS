import { addMylist, mylistCheck } from './mylist.helper';
import { CommonerrorHandler } from '../../../utils/errorHandler';
import { checkMyList, ImylistFilm } from '../../../interface/media.interface';

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

export const mylistCheckService = async (
  payload: checkMyList,
  userId: string,
) => {

  try {

    const data = await mylistCheck(payload, userId);
    console.log('data services : ', data);
    return data;

  } catch (error) {

    console.log(error, 'error from service');
    CommonerrorHandler(error);

  }

};
