import request from 'supertest';

import app from '../../../app';
import { routePath } from '../../../constant/routes';
import { seed } from '../../../seed';
import { getappData } from '../../../src/appdata/appdata.helper';

describe('get app data', () => {

  beforeAll(async () => {
    // const data = await getappData();
    // console.log(data.gender.length < 1);
    // console.log(data.gender.length, 'FFF');
    // data.gender.length < 1 && seed();
  });

  it('get app data', async () => {

    const res = await request(app).get(
      `${routePath.baseUrl}${routePath.appData}`,
    );
    expect(res.status).toEqual(200);
    expect(res.body.status).toEqual(true);
    expect(res.body.data);

  });

});
