import myListModel from './series.model';
import { errorHandler } from '../../../utils/errorHandler';
import { ImylistSeries } from '../../../interface/media.interface';

export const addMylist = async (payload: ImylistSeries) => {

  try {

    return await myListModel.create(payload);

  } catch (error) {

    errorHandler(error);

  }

};

export const findMylist = async (
  query: object,
  itemsPerPage: number,
  page: number,
) => {

  try {

    console.log(await myListModel.count(query));
    return await myListModel
      .find(query)
      .sort({ createdAt: 'desc' })
      .limit(Number(itemsPerPage))
      .skip(Number(page * itemsPerPage));

  } catch (error) {

    errorHandler(error);

  }

};

export const findMylistPageCount = async (query: object) => {

  try {

    return await myListModel.count(query);

  } catch (error) {

    errorHandler(error);

  }

};

export const findOneMylist = async (query: object) => {

  try {

    return await myListModel.find(query);

  } catch (error) {

    errorHandler(error);

  }

};

export const updateMylist = async (id: string, payload: ImylistSeries) => {

  try {

    return await myListModel.findByIdAndUpdate(id, payload, { new: true });

  } catch (error) {

    errorHandler(error);

  }

};

export const deleteMylist = async (query: object) => {

  try {

    return await myListModel.findOneAndDelete(query);

  } catch (error) {

    errorHandler(error);

  }

};

export const deleteManyMyList = async (query: object) => {

  try {

    return await myListModel.deleteMany(query);

  } catch (error) {

    console.log(error, 'rr');

    errorHandler(error);

  }

};
