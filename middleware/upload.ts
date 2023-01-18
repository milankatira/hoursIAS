/* eslint-disable @typescript-eslint/ban-ts-comment */
import multer from 'multer';
import util from 'util';
const maxSize = 80 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {

    // @ts-ignore
    cb(null, __basedir + '/resources/static/assets/uploads/');

  },
  filename: (req, file, cb) => {

    console.log('clg', req.file);
    console.log(file.originalname);
    cb(null, file.originalname);

  },
});

const uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single('file');

const uploadFileMiddleware = util.promisify(uploadFile);
export default uploadFileMiddleware;
