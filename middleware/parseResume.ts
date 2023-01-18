/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable camelcase */
import multer from 'multer';
import path from 'path';
import { createDir } from '../utils/file-operation';

const attachmentStorage = multer.diskStorage({
  // eslint-disable-next-line max-len
  // @ts-ignore
  destination: async (
    req: any,
    file: any,
    callback: (arg0: unknown, arg1: string | null) => void,
  ) => {

    try {

      // @ts-ignore
      callback(null, __basedir + '/resources/static/assets/uploads/');

    } catch (error) {

      callback(error, null);

    }

  },
  filename: async (
    req: any,
    file: { originalname: string },
    callback: (arg0: null, arg1: string) => void,
  ) => {

    const extension = await file.originalname.split('.').slice(-1).pop();
    const finalFilename = await `${Date.now()}.${extension}`;
    callback(null, finalFilename);

  },
});

const parseProfileAttachmentData = multer({
  storage: attachmentStorage,
  // @ts-ignore
  fileFilter(
    req: any,
    file: any,
    cb: (
      arg0: { message: string; errorType: string; status: number } | null,
      arg1: boolean | null,
    ) => any,
  ) {

    if (file.originalname.match(/\.(pdf|doc|txt)$/gi)) {

      return cb(null, true);

    }
    return cb(
      {
        message: 'Unsuported file format',
        errorType: 'UNSUPPORTED_FILE_TYPE',
        status: 403,
      },
      null,
    );

  },
}).fields([{ name: 'pdf' }]);

export const parseResumeAttachment = function (req: any, res: any, next: any) {

  parseProfileAttachmentData(
    req,
    // @ts-ignore
    res,
    (err: any) => {

      console.log(err);
      // / ERROR THERE UNXPECTED FIELD ERROR
      // eslint-disable-next-line eqeqeq
      if (err && err.code == 'LIMIT_UNEXPECTED_FILE') {

        const imageUploadErrorObject = {
          error_type: 'ERROR_IN_FILE_UPLOAD',
          error_message: 'There is an error in resume upload',
        };
        return res.status(500).json(imageUploadErrorObject);

      }
      if (err) {

        const unauthorizedErrorObject = {
          error_type: 'ERROR_IN_FILE_UPLOAD' || 'internal  server error',
          error_message: err.message || 'internal  server error',
        };
        return res.status(401).json(unauthorizedErrorObject);

      }
      return next();

    },
  );

};
