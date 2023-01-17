interface Error {
  errordesc: any;
  errorMsg?: string;
}

function isApiError(x: unknown): x is Error {

  if (x && typeof x === 'object' && 'errorMsg' in x) {

    return true;

  }
  return false;

}

export function isCommonApiError(x: unknown): x is Error {

  if (x && typeof x === 'object' && 'errorMsg' && 'errordesc' in x) {

    return true;

  }
  return false;

}

export default isApiError;

interface ValidationError {
  details: [
    {
      message: string;
    },
  ];
}

function isValidationError(x: unknown): x is ValidationError {

  if (x && typeof x === 'object' && 'details' in x) {

    return true;

  }
  return false;

}

export { isValidationError };
