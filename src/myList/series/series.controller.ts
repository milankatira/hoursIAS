import { Request, Response } from 'express';
import {
  addMylistService,
  deleteMylistService,
  updateMylistService,
  getMylistService,
  deleteManyMyListService,
} from './series.service';
import { response } from '../../../constant/response';

export const getMylist = async (req: any, res: Response) => {

  try {

    const itemsPerPage =
      req.query && req.query.itemsPerPage
        ? (req.query.itemsPerPage as unknown as number)
        : 10;
    const page =
      req.query && req.query.page ? (req.query.page as unknown as number) : 0;

    const result = await getMylistService(req.user.id, itemsPerPage, page);
    return res.status(200).json({
      status: true,
      message: response.fetchMyList,
      result,
    });

  } catch (error) {

    console.log('errr', error);
    return res.status(500).json({
      status: false,
      message: error,
    });

  }

};

export const addMylist = async (req: Request, res: Response) => {

  try {

    const result = await addMylistService(req.body);
    return res.status(201).json({
      status: true,
      message: response.addMyList,
      result,
    });

  } catch (error) {

    console.log('errr', error);
    return res.status(500).json({
      status: false,
      message: error,
    });

  }

};

export const updateMylist = async (req: Request, res: Response) => {

  try {

    const result = await updateMylistService(req.body, req.params.id);
    return res.status(200).json({
      status: true,
      message: response.updateMyList,
      result,
    });

  } catch (error) {

    console.log('errr', error);
    return res.status(500).json({
      status: false,
      message: error,
    });

  }

};

export const deleteMylist = async (req: any, res: Response) => {

  try {

    const result = await deleteMylistService(
      req.params.id,
      req.user.id as unknown as string,
    );
    return res.status(200).json({
      status: true,
      message: response.deleteMyList,
      result,
    });

  } catch (error) {

    console.log('errr', error);
    return res.status(500).json({
      status: false,
      message: error,
    });

  }

};

export const deleteManyMyList = async (req: any, res: Response) => {

  try {

    const result = await deleteManyMyListService(req.user.id, req.body._ids);
    return res.status(201).json({
      status: true,
      message: response.deleteDownload,
      result,
    });

  } catch (error) {

    console.log('errr', error);
    return res.status(500).json({
      status: false,
      message: error,
    });

  }

};
