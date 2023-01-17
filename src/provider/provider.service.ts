import { getProvider } from './provider.helper';
import { errorHandler } from '../../utils/errorHandler';

export const getProviderService = async (query: object) => {

  try {

    return await getProvider(query);

  } catch (error) {

    errorHandler(error);

  }

};
