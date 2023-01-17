import { Response } from 'express';
import { addMylistService } from './download.service';
import { response } from '../../../constant/response';

export const addMylist = async (req: any, res: Response) => {

  try {

    const result = await addMylistService(req.body, req.user.id);
    return res.status(201).json({
      status: true,
      message: response.addDownload,
      result,
    });

  } catch (error: any) {

    console.log('errr', error);

    return res.status(500).json({
      status: false,
      message: error.errorMsg,
      errorDescription: error.errordesc,
    });

  }

};
