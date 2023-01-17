import joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';
import { ValidationErrorHandler } from '../../../utils/errorHandler';
export const validateMedia = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {

  const packet = {
    ...req.body,
  };

  const schema = joi.object({
    mediaId: joi.string().required(),
  });

  try {

    const result = await schema.validateAsync(packet);
    if (result) {

      next();

    }

  } catch (error) {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const validationError = ValidationErrorHandler(error);
    return res.status(400).json({
      message: validationError.errorType,
      errorType: validationError.errorMessage,
    });

  }

};
