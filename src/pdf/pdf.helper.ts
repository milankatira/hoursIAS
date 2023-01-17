import { errorHandler } from './../../utils/errorHandler';
import pdfModel from './pdf.model';

export const addPdf = async (payload: any) => {

  try {

    return await pdfModel.create(payload);

  } catch (error) {

    errorHandler(error);

  }

};

export const findOneAndDelete = async (query: object) => {

  try {

    return await pdfModel.findOneAndDelete(query);

  } catch (error) {

    errorHandler(error);

  }

};


export const getPdf=async (query: object) =>{

  try {

    return await pdfModel.find(query);

  } catch (error) {

    errorHandler(error);

  }

};