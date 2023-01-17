import express from 'express';
const router = express.Router();

import { getProvider } from './provider.controller';

router.get('/provider', getProvider);

export default router;
