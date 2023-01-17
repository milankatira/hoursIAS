import request from 'supertest';
import { mylistFilms, token } from './../../mock-data/mylist/mylist';
import app from '../../../app';
import mylistModal from '../../../src/myList/films/films.model';
import { response } from '../../../constant/response';
import { deleteMylist } from '../../../src/myList/films/films.helper';
import { routePath } from '../../../constant/routes';

describe('getmylist film', () => {

  it('get mylist film successfully', async () => {

    const res = await request(app)
      .get(`${routePath.baseUrl}${routePath.myListFilm}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toEqual(200);
    expect(res.body.status).toEqual(true);
    expect(res.body.data);

  });

});

describe('add mylist film', () => {

  beforeEach(() => {

    deleteMylist({ mediaId: mylistFilms.payload.mediaId });

  });

  it('add mylist film successfully', async () => {

    const res = await request(app)
      .post(`${routePath.baseUrl}${routePath.mylist}`)
      .set('Authorization', `Bearer ${token}`)
      .send(mylistFilms.payload);
    expect(res.status).toEqual(201);
    expect(res.body.status).toEqual(true);
    expect(res.body.message).toEqual(response.addMyList);
    expect(res.body.data);

  });

});

// describe('update film mylist', () => {

//   it('update mylist film successfully', async () => {

//     const data = await mylistModal.findOne({
//       userId: mylistFilms.userId,
//     });
//     const res = await request(app).put(
//       `${routePath.baseUrl}${routePath.myListFilm}/${data?._id}`,
//     );
//     expect(res.status).toEqual(200);
//     expect(res.body.status).toEqual(true);
//     expect(res.body.message).toEqual(response.updateMyList);
//     expect(res.body.data);

//   });

// });

describe('delete mylist film', () => {

  it('delete mylist film successfully', async () => {

    const data = await mylistModal.findOne({
      userId: mylistFilms.userId,
    });

    const res = await request(app)
      .delete(`${routePath.baseUrl}${routePath.myListFilm}/${data?.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toEqual(200);
    expect(res.body.status).toEqual(true);
    expect(res.body.message).toEqual(response.deleteMyList);

  });

});
