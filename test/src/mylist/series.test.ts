import request from 'supertest';
import { mylistseries, token } from './../../mock-data/mylist/mylist';
import app from '../../../app';
import mylistseriesModal from '../../../src/myList/series/series.model';
import { deleteMylist } from '../../../src/myList/series/series.helper';
import { response } from '../../../constant/response';
import { routePath } from '../../../constant/routes';

describe('getmylist series', () => {

  it('get mylist series successfully', async () => {

    const res = await request(app)
      .get(`${routePath.baseUrl}${routePath.myListSeries}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toEqual(200);
    expect(res.body.status).toEqual(true);
    expect(res.body.data);

  });

});

describe('add mylist series', () => {

  beforeEach(() => {

    deleteMylist({ mediaId: mylistseries.payload.mediaId });

  });

  it('add mylist film successfully', async () => {

    const res = await request(app)
      .post(`${routePath.baseUrl}${routePath.mylist}`)
      .set('Authorization', `Bearer ${token}`)
      .send(mylistseries.payload);
    expect(res.status).toEqual(201);
    expect(res.body.status).toEqual(true);
    expect(res.body.message).toEqual(response.addMyList);
    expect(res.body.data);

  });

});

// describe('update series mylist', () => {

//   it('update mylist film successfully', async () => {

//     const data = await mylistseriesModal.findOne({
//       userId: mylistseries.userId,
//     });
//     const res = await request(app).put(
//       `${routePath.baseUrl}${routePath.myListSeries}/${data?._id}`,
//     );
//     expect(res.status).toEqual(200);
//     expect(res.body.status).toEqual(true);
//     expect(res.body.message).toEqual(response.updateMyList);
//     expect(res.body.data);

//   });

// });

describe('delete mylist series', () => {

  it('delete mylist film successfully', async () => {

    const data = await mylistseriesModal.findOne({
      userId: mylistseries.userId,
    });

    const res = await request(app)
      .delete(`${routePath.baseUrl}${routePath.myListSeries}/${data?.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toEqual(200);
    expect(res.body.status).toEqual(true);
    expect(res.body.message).toEqual(response.deleteMyList);

  });

});
