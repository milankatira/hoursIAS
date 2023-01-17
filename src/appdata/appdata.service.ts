import { getappData } from './appdata.helper';
import { errorHandler } from '../../utils/errorHandler';

export const getAppDataService = async () => {

  try {

    return await getappData();

  } catch (error) {

    errorHandler(error);

  }

};
