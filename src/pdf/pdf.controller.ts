import { Request, Response } from 'express';
import { response } from './../../constant/response';
import { addPdfService, deletePdfService, getPdfService } from './pdf.service';

export const addPdfControllers = async (req: any, res: Response) => {
  try {
    // const { resume } = req.files;
    console.log(req.files.pdf[0]);
    // const data = await uploadFileMiddleware(req, res);
    // console.log(resume, 'data');
    // const { image } = req.files;
    console.log(req.file, 'body');
    // const { resume } = req.files;
    // console.log(resume, 'resume');
    const userId = '63638b1e3766cce7b2cf725a';
    // const result = await addPdfService(userId,req.body);
    return res.status(200).json({
      status: true,
      message: response.addPdf,
      // result,
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
