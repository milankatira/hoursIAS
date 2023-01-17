import { Schema } from 'mongoose';

export interface ImylistFilm {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  mediaId: string;
  metadata: {
    images: [];
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface checkMyList {
  mediaId: string;
  tags: string;
}

export interface ImylistSeries extends ImylistFilm {
  episodeTitle: string;
  seriesTitle: string;
}
