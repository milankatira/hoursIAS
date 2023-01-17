import express from 'express';
import { addPdfControllers, getPdfControllers, removePdfControllers } from './pdf.controller';

import { Auth } from '../../middleware/Auth';
const router = express.Router();

router.post('/pdf', Auth,addPdfControllers);
router.get('/pdf',Auth, getPdfControllers);
router.delete('/pdf', Auth,removePdfControllers);

export default router;
