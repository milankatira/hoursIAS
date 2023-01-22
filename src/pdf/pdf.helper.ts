import { errorHandler } from './../../utils/errorHandler';
import pdfModel from './pdf.model';

export const addPdf = async (payload: any) => {

  try {

    // eslint-disable-next-line no-var
    var BookMarkList:any = [];
    await payload?.bookMark?.map((item: any) => {

      BookMarkList.push({
        availablePageFrom: item[0],
        availablePageTo: item[1],
        name: item[2],
      });

    });

    const data = {
      ...payload,
      bookMark: BookMarkList,
    };
    return await pdfModel.create(data);

  } catch (error) {

    console.log(error);
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

export const getPdf = async (query: object) => {

  try {

    return await pdfModel.find(query);

  } catch (error) {

    errorHandler(error);

  }

};
