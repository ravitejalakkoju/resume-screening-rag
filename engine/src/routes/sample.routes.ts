import { Router } from 'express';
import {
  createSample,
  deleteSample,
  getSample,
  listSamples,
} from '../controllers/sample.controller';

const router = Router();

router.get('/', listSamples);
router.post('/', createSample);
router.get('/:id', getSample);
router.delete('/:id', deleteSample);

export default router;
