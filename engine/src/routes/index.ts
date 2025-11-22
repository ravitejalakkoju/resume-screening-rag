import { Router } from 'express';
import healthRoutes from './health.routes';
import sampleRoutes from './sample.routes';

const router = Router();

router.get('/', (_req, res) => {
  res.json({ message: 'API is ready' });
});

router.use('/health', healthRoutes);
router.use('/api/v1/samples', sampleRoutes);

export default router;
