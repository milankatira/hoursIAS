import express from 'express';
import { routePath } from './../../../constant/routes';
import { validateBulkDelete, validateFilms } from './films.validator';
import {
  addMylist,
  updateMylist,
  deleteMylist,
  getMylist,
  deleteManyMyList,
} from './films.controller';
import { Auth } from '../../../middleware/Auth';
const router = express.Router();

router.post(routePath.myListFilm, validateFilms, addMylist);
router.get(`${routePath.myListFilm}`, Auth, getMylist);
router.put(`${routePath.myListFilm}/:id`, updateMylist);
router.delete(`${routePath.myListFilm}/:id`, Auth, deleteMylist);
router.post(
  '/mylist/film/delete',
  [Auth, validateBulkDelete],
  deleteManyMyList,
);

export default router;
