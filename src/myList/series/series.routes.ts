import express from 'express';
import {
  addMylist,
  updateMylist,
  deleteMylist,
  getMylist,
  deleteManyMyList,
} from './series.controller';
import { validateSeries, validateBulkDelete } from './series.validator';
import { Auth } from '../../../middleware/Auth';
import { routePath } from '../../../constant/routes';
const router = express.Router();

router.post(routePath.myListSeries, validateSeries, addMylist);
router.get(`${routePath.myListSeries}`, Auth, getMylist);
router.put(`${routePath.myListSeries}/:id`, updateMylist);
router.delete(`${routePath.myListSeries}/:id`, Auth, deleteMylist);
router.post(
  '/mylist/series/delete',
  [Auth, validateBulkDelete],
  deleteManyMyList,
);

export default router;
