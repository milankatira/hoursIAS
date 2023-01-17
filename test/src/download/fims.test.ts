import request from 'supertest';
import { mylistFilms, token } from './../../mock-data/mylist/mylist';
import app from '../../../app';
import downloadFilmModel from '../../../src/download/films/films.model';

import { deleteMylist } from '../../../src/download/films/films.helper';
import { response } from '../../../constant/response';
import { routePath } from '../../../constant/routes';

describe('getdownload film', () => {

  it('get download film successfully', async () => {

    const res = await request(app)
      .get(`${routePath.baseUrl}${routePath.downloadFilm}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toEqual(200);
    expect(res.body.status).toEqual(true);
    expect(res.body.data);

  });

});

describe('add download film', () => {

  beforeEach(() => {

    deleteMylist({ mediaId: mylistFilms.payload.mediaId });

  });

  it('add download film successfully', async () => {

    const res = await request(app)
      .post(`${routePath.baseUrl}${routePath.download}`)
      .set('Authorization', `Bearer ${token}`)
      .send(mylistFilms.payload);
    expect(res.status).toEqual(201);
    expect(res.body.status).toEqual(true);
    expect(res.body.message).toEqual(response.addDownload);
    expect(res.body.data);

  });

});

// describe('update film download', () => {

//   it('update download film successfully', async () => {

//     const data = await downloadFilmModel.findOne({
//       userId: mylistFilms.userId,
//     });
//     const res = await request(app).put(
//       `${routePath.baseUrl}${routePath.downloadFilm}/${data?._id}`,
//     );
//     expect(res.status).toEqual(200);
//     expect(res.body.status).toEqual(true);
//     expect(res.body.message).toEqual(response.updateDownload);
//     expect(res.body.data);

//   });

// });

describe('delete download film', () => {

  it('delete download film successfully', async () => {

    const data = await downloadFilmModel.findOne({
      userId: mylistFilms.userId,
    });

    const res = await request(app)
      .delete(`${routePath.baseUrl}${routePath.downloadFilm}/${data?.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toEqual(200);
    expect(res.body.status).toEqual(true);
    expect(res.body.message).toEqual(response.deleteDownload);

  });

});
