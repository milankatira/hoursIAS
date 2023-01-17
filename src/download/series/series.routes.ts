import express from 'express';
import {
  addMylist,
  updateMylist,
  deleteMylist,
  getMylist,
  deleteManyMyList,
} from './series.controller';
import { validateSeries, validateBulkDelete } from './series.validator';
import { routePath } from '../../../constant/routes';
import { Auth } from '../../../middleware/Auth';
const router = express.Router();

router.post(routePath.downloadSeries, validateSeries, addMylist);
router.get(`${routePath.downloadSeries}`, Auth, getMylist);
router.put(`${routePath.downloadSeries}/:id`, Auth, updateMylist);
router.delete(`${routePath.downloadSeries}/:id`, Auth, deleteMylist);

router.post(
  '/download/series/delete',
  [Auth, validateBulkDelete],
  deleteManyMyList,
);

export default router;
