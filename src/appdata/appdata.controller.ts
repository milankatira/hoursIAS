import { Request, Response } from 'express';
import { getAppDataService } from './appdata.service';
import { response } from '../../constant/response';
export const getappData = async (req: Request, res: Response) => {

  try {

    const result = await getAppDataService();
    return res.status(200).json({
      status: true,
      message: response.appData,
      result,
    });

  } catch (error) {

    return res.status(500).json({
      status: false,
      message: error,
    });

  }

};
