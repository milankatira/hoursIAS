import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';

export const Auth = (req: any, res: Response, next: NextFunction) => {

  try {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token)
      return res.status(401).json({
        message: 'A token is required for authentication',
        errorType: 'unauthorized',
      });

    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY as string);
    req.user = decoded;

  } catch (err) {

    return res.status(401).json({
      message: 'Invalid Token',
      errorType: 'unauthorized',
    });

  }
  return next();

};
