import axios from 'axios';
import { errorMessage } from './../../../constant/error';
import { jwtUrl } from './../../../constant/url';
import myListFilmModel from '../films/films.model';
import myListSeriesModel from '../series/series.model';
import { checkMyList, ImylistFilm } from '../../../interface/media.interface';
import { findOneMylist as findFilmMylist } from '../films/films.helper';
import { findOneMylist as findSeriesMylist } from '../series/series.helper';
import { response } from '../../../constant/response';

export const addMylist = async (payload: ImylistFilm, userId: string) => {

  try {

    try {

      const mediaData = await axios.get(jwtUrl(payload.mediaId));
      if (!mediaData.data.playlist[0]) {

        throw {
          errorMsg: errorMessage.internalServerErrorWentWrong,
          errordesc: 'playlist is required',
        };

      }
      if (!mediaData.data.playlist[0].tags) {

        throw {
          errorMsg: errorMessage.internalServerErrorWentWrong,
          errordesc: 'tags is required',
        };

      }
      if (!mediaData.data.playlist[0].images) {

        throw {
          errorMsg: errorMessage.internalServerErrorWentWrong,
          errordesc: 'images is required',
        };

      }
      if (mediaData.data.playlist[0].tags?.includes('film')) {

        // For Films
        const mylist = await myListFilmModel.findOne({
          userId,
          mediaId: payload.mediaId,
        });
        if (mylist) {

          throw { errorMsg: errorMessage.alreadyHaveinList };

        }

        return await myListFilmModel.create({
          ...payload,
          userId,
          metadata: mediaData.data,
          images: mediaData.data.playlist[0].images,
        });

      }

      // For Series
      const data = {
        ...payload,
        userId,
        metadata: mediaData.data,
        seriesTitle: mediaData.data.playlist[0].seriesTitle,
        episodeTitle: `S${mediaData.data.playlist[0].seasonNumber} E${mediaData.data.playlist[0].episodeNumber} | ${mediaData.data.playlist[0].title}`,
        images: mediaData.data.playlist[0].images,
      };
      const mylist = await myListSeriesModel.findOne({
        userId,
        mediaId: payload.mediaId,
      });
      if (mylist) {

        throw { errorMsg: errorMessage.alreadyHaveinList };

      }

      return await myListSeriesModel.create(data);

    } catch (err: any) {

      console.log(err, 'err from helper');
      throw {
        errorMsg: err?.response?.data?.message || err.errorMsg,
        errordesc: err.errordesc,
      };

    }

  } catch (error: any) {

    throw { errorMsg: error.errorMsg, errordesc: error.errordesc };

  }

};

export const mylistCheck = async (payload: checkMyList, userId: string) => {

  try {

    const { mediaId, tags } = payload;

    let _id = null;

    let isAlreadyInMyList: boolean;
    if (tags?.includes('film')) {

      const data = await findFilmMylist({ userId, mediaId });
      if (data?.length) {

        _id = data[0]._id;
        isAlreadyInMyList = true;

      } else isAlreadyInMyList = false;

    } else {

      const data = await findSeriesMylist({ userId, mediaId });
      if (data?.length) {

        _id = data[0]._id;
        isAlreadyInMyList = true;

      } else isAlreadyInMyList = false;

    }

    return {
      data: { _id, isAlreadyInMyList },
      responseMsg: isAlreadyInMyList
        ? response.alreadyInMyList
        : response.notInMyList,
    };

  } catch (error: any) {

    throw {
      errorMsg: errorMessage.internalServerError,
      errordesc: errorMessage.internalServerError,
    };

  }

};
