import express from 'express';
import {
  addPdfControllers,
  getPdfControllers,
  removePdfControllers,
} from './pdf.controller';
import { Auth } from '../../middleware/Auth';
import { parseResumeAttachment } from '../../middleware/parseResume';
const router = express.Router();

router.post('/pdf', parseResumeAttachment, addPdfControllers);
router.get('/pdf', getPdfControllers);
router.delete('/pdf', removePdfControllers);

export default router;
