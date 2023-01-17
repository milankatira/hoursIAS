import request from 'supertest';
import { mylistseries, token } from './../../mock-data/mylist/mylist';
import app from '../../../app';
import downloadseriesModel from '../../../src/download/series/series.model';

import { deleteMylist } from '../../../src/download/films/films.helper';
import { response } from '../../../constant/response';
import { routePath } from '../../../constant/routes';

describe('getdownload series', () => {

  it('get download series successfully', async () => {

    const res = await request(app)
      .get(`${routePath.baseUrl}${routePath.downloadSeries}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toEqual(200);
    expect(res.body.status).toEqual(true);
    expect(res.body.data);

  });

});

describe('add download series', () => {

  beforeEach(() => {

    deleteMylist({ mediaId: mylistseries.payload.mediaId });

  });

  it('add download film successfully', async () => {

    const res = await request(app)
      .post(`${routePath.baseUrl}${routePath.download}`)
      .set('Authorization', `Bearer ${token}`)
      .send(mylistseries.payload);
    expect(res.status).toEqual(201);
    expect(res.body.status).toEqual(true);
    expect(res.body.message).toEqual(response.addDownload);
    expect(res.body.data);

  });

});

// describe('update series download', () => {

//   it('update download film successfully', async () => {

//     const data = await downloadseriesModel.findOne({
//       userId: mylistseries.userId,
//     });
//     const res = await request(app).put(
//       `${routePath.baseUrl}${routePath.downloadSeries}/${data?._id}`,
//     );
//     expect(res.status).toEqual(200);
//     expect(res.body.status).toEqual(true);
//     expect(res.body.message).toEqual(response.updateDownload);
//     expect(res.body.data);

//   });

// });

describe('delete download series', () => {

  it('delete download film successfully', async () => {

    const data = await downloadseriesModel.findOne({
      userId: mylistseries.userId,
    });

    const res = await request(app)
      .delete(`${routePath.baseUrl}${routePath.downloadSeries}/${data?.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toEqual(200);
    expect(res.body.status).toEqual(true);
    expect(res.body.message).toEqual(response.deleteDownload);

  });

});
