import { Request, Response } from 'express';
import { response } from './../../constant/response';
import { addPdfService, deletePdfService, getPdfService } from './ped.service';

export const addPdfControllers = async(req: any, res: Response) => {

  try {

    const result = await addPdfService(req.body);
    return res.status(200).json({
      status: true,
      message: response.addPdf,
      result,
    });

  } catch (error) {

    console.log('errr', error);
    return res.status(500).json({
      status: false,
      message: error,
    });

  }

};


export const getPdfControllers = async (req: any, res: Response) => {

  try {

    const result = await getPdfService(req.body.query);
    return res.status(200).json({
      status: true,
      message: response.addPdf,
      result,
    });

  } catch (error) {

    console.log('errr', error);
    return res.status(500).json({
      status: false,
      message: error,
    });

  }

};


export const removePdfControllers = async (req: any, res: Response) => {

  try {

    const result = await deletePdfService(req.body.query);
    return res.status(200).json({
      status: true,
      message: response.addPdf,
      result,
    });

  } catch (error) {

    console.log('errr', error);
    return res.status(500).json({
      status: false,
      message: error,
    });

  }

};
