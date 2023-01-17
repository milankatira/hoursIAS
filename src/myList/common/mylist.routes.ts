import express from 'express';
import { validateIsInMyList, validateMedia } from './mylist.validator';
import { addMylist, mylistCheck } from './mylist.controller';
import { Auth } from '../../../middleware/Auth';
import { routePath } from '../../../constant/routes';
const router = express.Router();

router.post(routePath.mylist, Auth, validateMedia, addMylist);

router.post('/mylist/check', [Auth, validateIsInMyList], mylistCheck);

export default router;
