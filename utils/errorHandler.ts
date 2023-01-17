import { errorMessage } from './../constant/error';
import isApiError, {
  isCommonApiError,
  isValidationError,
} from '../interface/error.interface';
export const errorHandler = (error: unknown) => {

  if (isApiError(error)) {

    throw error.errorMsg;

  } else {

    throw errorMessage.internalServerError;

  }

};

export const CommonerrorHandler = (error: unknown) => {

  if (isCommonApiError(error)) {

    throw { errorMsg: error.errorMsg, errordesc: error.errordesc };

  } else {

    throw errorMessage.internalServerError;

  }

};

export const ValidationErrorHandler: {
  errorType: string;
  errorMessage: string;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} = (error: unknown) => {

  if (isValidationError(error)) {

    return {
      errorType: 'VALIDATION_ERROR',
      errorMessage: error.details[0].message,
    };

  }
  return {
    errorType: 'VALIDATION_ERROR',
    errorMessage: 'UNKNOWN ERROR',
  };

};
