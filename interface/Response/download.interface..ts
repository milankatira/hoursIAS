import { ImylistFilm, ImylistSeries } from '../media.interface';

export interface IdownloadFilmResponse {
  status: boolean;
  message: string;
  result: {
    data: ImylistFilm[];
    count: number;
  };
  count: number;
}

export interface IdownloadseriesResponse {
  status: boolean;
  message: string;
  result: {
    data: [
      {
        episodeData: ImylistSeries[];
        seriesTitle: string;
      },
    ];
    count: number;
  };
  count: number;
}
