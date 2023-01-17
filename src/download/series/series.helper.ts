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

    return await myListModel
      .aggregate([
        { $match: query },
        // TODO:sort before grouping
        { $sort: { createdAt: -1 } },
        {
          $group: {
            _id: '$seriesTitle',
            episodeData: { $push: '$$ROOT' },
            count: { $sum: 1 },
          },
        },
        // TODO:sort data inside the group
        { $sort: { count: -1 } },
        {
          $sort: {
            'episodeData.createdAt': -1,
          },
        },
        {
          $project: {
            _id: 0,
            seriesTitle: '$_id',
            episodeData: 1,
          },
        },
      ])
      .skip(Number(page * itemsPerPage))
      .limit(Number(itemsPerPage));

  } catch (error) {

    console.log(error, 'error occurred');
    errorHandler(error);

  }

};

export const findMylistPageCount = async (query: object) => {

  try {

    return await myListModel.aggregate([
      { $match: query },
      {
        $group: {
          _id: '$seriesTitle',
          episodeData: { $push: '$$ROOT' },
        },
      },
      {
        $project: {
          _id: 0,
          seriesTitle: '$_id',
          episodeData: 1,
        },
      },
    ]);

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
