import mongoose, { Schema } from 'mongoose';
import {
  addMylist,
  deleteManyMyList,
  deleteMylist,
  findMylist,
  findMylistPageCount,
  findOneMylist,
  updateMylist,
} from './series.helper';
import { errorHandler } from '../../../utils/errorHandler';
import { errorMessage } from '../../../constant/error';
import { ImylistSeries } from '../../../interface/media.interface';

export const getMylistService = async (
  userId: Schema.Types.ObjectId | string,
  itemsPerPage: number,
  page: number,
) => {

  try {

    const data = await findMylist(
      {
        userId: new mongoose.Types.ObjectId(
          userId as unknown as mongoose.Types.ObjectId,
        ),
      },
      itemsPerPage,
      page,
    );
    const count = await findMylistPageCount({ userId });
    return { data, count };

  } catch (error) {

    errorHandler(error);

  }

};

export const addMylistService = async (payload: ImylistSeries) => {

  const { userId, mediaId } = payload;
  try {

    const mylist = await findOneMylist({ userId, mediaId });
    if (mylist?.length) {

      throw { errorMsg: errorMessage.alreadyHaveinList };

    }
    const data = await addMylist(payload);
    return data;

  } catch (error) {

    errorHandler(error);

  }

};

export const updateMylistService = async (
  payload: ImylistSeries,
  id: string,
) => {

  try {

    return await updateMylist(id, payload);

  } catch (error) {

    errorHandler(error);

  }

};

export const deleteMylistService = async (_id: string, userId: string) => {

  try {

    const data = await deleteMylist({ _id, userId });
    if (!data) {

      throw { errorMsg: errorMessage.mylistNotFound };

    }

  } catch (error) {

    errorHandler(error);

  }

};

export const deleteManyMyListService = async (
  userId: string,
  payload: object,
) => {

  try {

    return await deleteManyMyList({ userId, _id: { $in: payload } });

  } catch (error) {

    console.log(error);
    errorHandler(error);

  }

};
