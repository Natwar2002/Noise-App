import { Router } from 'express';
import { createDMController, getDmsController } from '../../controllers/dmController.js';
import { isAuthenticated } from '../../middlewares/authMiddleware.js';

const dmRouter = Router();

dmRouter.post('/', isAuthenticated, createDMController);
dmRouter.get('/', isAuthenticated, getDmsController);

export default dmRouter;