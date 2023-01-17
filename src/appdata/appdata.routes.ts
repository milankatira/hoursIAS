import express from 'express';
import { routePath } from '../../constant/routes';
const router = express.Router();

import { getappData } from './appdata.controller';

router.get(`${routePath.appData}`, getappData);

export default router;
