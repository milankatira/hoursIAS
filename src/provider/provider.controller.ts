import { Request, Response } from 'express';
import { getProviderService } from './provider.service';
import { response } from '../../constant/response';

export const getProvider = async (req: Request, res: Response) => {

  try {

    const result = await getProviderService(req.query as unknown as object);
    return res.status(201).json({
      status: true,
      message: response.getProvider,
      result,
    });

  } catch (error) {

    return res.status(500).json({
      status: false,
      message: error,
    });

  }

};
