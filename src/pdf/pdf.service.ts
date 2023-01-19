import { movePdfToInUsersPdfFolder } from './../../utils/attachment';
import { errorHandler } from './../../utils/errorHandler';
import { findOneAndDelete, getPdf, addPdf } from './pdf.helper';

export const getPdfService = async (query: object) => {

  try {

    return await getPdf(query);

  } catch (error) {

    errorHandler(error);

  }

};

export const deletePdfService = async (query: object) => {

  try {

    return await findOneAndDelete(query);

  } catch (error) {

    errorHandler(error);

  }

};

export const addPdfService = async (user: string, payload: any) => {

  try {

    // await movePdfToInUsersPdfFolder(payload.user,user);
    return await addPdf(payload);

  } catch (error) {

    errorHandler(error);

  }

};
