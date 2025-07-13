import { Router } from 'express';
import { getDmsController } from '../../controllers/dmController.js';
import { isAuthenticated } from '../../middlewares/authMiddleware.js';

const dmRouter = Router();

dmRouter.get('/', isAuthenticated, getDmsController);

export default dmRouter;