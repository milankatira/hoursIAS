import { ImylistFilm, ImylistSeries } from '../media.interface';

export interface ImylistFilmResponse {
  status: boolean;
  message: string;
  result: {
    data: ImylistFilm[];
    count: number;
  };
  count: number;
}

export interface ImylistseriesResponse {
  status: boolean;
  message: string;
  result: {
    data: ImylistSeries[];
    count: number;
  };
  count: number;
}
