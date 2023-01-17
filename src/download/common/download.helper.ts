import axios from 'axios';
import downloadFilmModel from '../films/films.model';
import downloadSeriesModel from '../series/series.model';
import { ImylistFilm } from '../../../interface/media.interface';
import { errorMessage } from '../../../constant/error';
import { jwtUrl } from '../../../constant/url';

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

      // For films
      if (mediaData.data.playlist[0].tags?.includes('film')) {

        const mylist = await downloadFilmModel.findOne({
          userId,
          mediaId: payload.mediaId,
        });
        if (mylist) {

          throw {
            errorMsg: errorMessage.alreadyHaveinDownload,
            errordesc: errorMessage.alreadyHaveinDownload,
          };

        }

        const data = {
          ...payload,
          userId,
          metadata: mediaData.data,
          images: mediaData.data.playlist[0].images,
        };

        return await downloadFilmModel.create(data);

      }
      // For series

      const data = {
        ...payload,
        userId,
        metadata: mediaData.data,
        seriesTitle: mediaData.data.playlist[0].seriesTitle,
        episodeTitle: mediaData.data.playlist[0].title,
        images: mediaData.data.playlist[0].images,
      };
      const mylist = await downloadSeriesModel.findOne({
        userId,
        mediaId: payload.mediaId,
      });
      if (mylist) {

        throw {
          errorMsg: errorMessage.alreadyHaveinDownload,
          errordesc: errorMessage.alreadyHaveinDownload,
        };

      }

      return await downloadSeriesModel.create(data);

    } catch (err: any) {

      throw {
        errorMsg: err?.response?.data?.message || err.errorMsg,
        errordesc: err.errordesc,
      };

    }

  } catch (error: any) {

    throw { errorMsg: error.errorMsg, errordesc: error.errordesc };

  }

};
