import joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';
import { ValidationErrorHandler } from '../../../utils/errorHandler';
export const validateSeries = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {

  const packet = {
    ...req.body,
  };

  const schema = joi.object({
    userId: joi.string().required(),
    episodeTitle: joi.string().required(),
    seriesTitle: joi.string().required(),
    mediaId: joi.string().required(),
    metadata: joi.object().required(),
    images: joi.array().required(),
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

export const validateSignIn = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {

  const packet = {
    ...req.body,
  };

  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi
      .string()
      .min(8)
      .max(16)
      .required()
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,20})/)
      .messages({
        'string.pattern.base': `Password should be a One Uppercase, One Lowercase, One Number and One Special Case Character`,
        'string.empty': `Password should be a minimum of 8 characters. Max 16 characters`,
        'string.min': `Password should be a minimum of 8 characters. Max 16 characters`,
        'string.max': `Password should be a minimum of 8 characters. Max 16 characters`,
      }),
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

export const validateForgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {

  const packet = {
    ...req.body,
  };

  const schema = joi.object({
    email: joi.string().email().required(),
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

export const validateResetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {

  const packet = {
    ...req.body,
  };

  const schema = joi.object({
    password: joi
      .string()
      .min(8)
      .max(16)
      .required()
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,20})/)
      .messages({
        'string.pattern.base': `Password should be a One Uppercase, One Lowercase, One Number and One Special Case Character`,
        'string.empty': `Password should be a minimum of 8 characters. Max 16 characters`,
        'string.min': `Password should be a minimum of 8 characters. Max 16 characters`,
        'string.max': `Password should be a minimum of 8 characters. Max 16 characters`,
      }),
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

export const validateBulkDelete = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {

  const packet = {
    ...req.body,
  };

  const schema = joi.object({
    _ids: joi.array().items(joi.string()).required(),
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
