import { Router } from 'express';
import { createDMController, getDmByIdController, getDmsController } from '../../controllers/dmController.js';
import { isAuthenticated } from '../../middlewares/authMiddleware.js';

const dmRouter = Router();

dmRouter.post('/', isAuthenticated, createDMController);
dmRouter.get('/', isAuthenticated, getDmsController);
dmRouter.get('/:dmId', isAuthenticated, getDmByIdController);

export default dmRouter;