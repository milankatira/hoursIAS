import { Response } from 'express';
import { addMylistService, mylistCheckService } from './mylist.service';
import { response } from '../../../constant/response';

export const addMylist = async (req: any, res: Response) => {

  try {

    const result = await addMylistService(req.body, req.user.id);
    return res.status(201).json({
      status: true,
      message: response.addMyList,
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

export const mylistCheck = async (req: any, res: Response) => {

  try {

    const result = await mylistCheckService(req.body, req.user.id);
    if (result) {

      return res.status(200).json({
        status: true,
        message: result.responseMsg,
        result: result.data,
      });

    }

  } catch (error: any) {

    console.log('Error in myList/common/mylistCheck: ', error);
    return res.status(500).json({
      status: false,
      message: error.errorMsg,
      errorDescription: error.errordesc,
    });

  }

};
