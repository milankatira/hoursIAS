const env = process.env.ENV;

const masterConfig = {
  local: {
    clientUrl: 'http://localhost:3000/',
    serverUrl: 'http://localhost:5000/api/v1',
    mongoUrl: 'mongodb://localhost:27017/pdf',
  },
  staging: {
    serverUrl: 'https://revolttv-api.revoltcreator.com/api/v1',
    clientUrl: 'https://auth.revoltcreator.com/',
    mongoUrl: 'mongodb://localhost:27017/revolt-dtc',
  },
  prod: {
    serverUrl: 'https://revolttv-api.revoltcreator.com',
    clientUrl: 'https://revolttv-api.revoltcreator.com/',
    mongoUrl: 'mongodb://localhost:27017/revolt-dtc',
  },
  test: {
    clientUrl: 'http://localhost:4000/',
    serverUrl: 'http://localhost:4000/api/v1',
    mongoUrl: 'mongodb://localhost:27017/revolt-dtc-test',
  },
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const clientUrl = masterConfig[env].clientUrl;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const serverUrl = masterConfig[env].serverUrl;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const MONGOURL = masterConfig[env].mongoUrl;
