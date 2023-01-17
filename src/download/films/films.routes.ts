import express from 'express';
import { routePath } from './../../../constant/routes';
import {
  addMylist,
  updateMylist,
  deleteMylist,
  getMylist,
  deleteManyMyList,
} from './films.controller';
import { validateFilms, validateBulkDelete } from './films.validator';
import { Auth } from '../../../middleware/Auth';
const router = express.Router();

router.post(routePath.downloadFilm, validateFilms, addMylist);
router.get(`${routePath.downloadFilm}`, Auth, getMylist);
router.put(`${routePath.downloadFilm}/:id`, updateMylist);
router.delete(`${routePath.downloadFilm}/:id`, Auth, deleteMylist);
router.post(
  '/download/film/delete',
  [Auth, validateBulkDelete],
  deleteManyMyList,
);

export default router;
