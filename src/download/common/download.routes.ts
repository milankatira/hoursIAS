import express from 'express';
import { validateMedia } from './download.validator';
import { addMylist } from './download.controller';
import { Auth } from '../../../middleware/Auth';
import { routePath } from '../../../constant/routes';
const router = express.Router();

router.post(routePath.download, Auth, validateMedia, addMylist);
export default router;
