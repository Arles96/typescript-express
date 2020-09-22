import ExampleController from '../controllers/exampleController';
import { Router } from 'express';

const router: Router = Router();

router.get('/', ExampleController.index);

export default router;
