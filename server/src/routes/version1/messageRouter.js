import { Router } from 'express';
import { isAuthenticated } from '../../middlewares/authMiddleware.js';
import { getMessagesController } from '../../controllers/messageController.js';

const messageRouter = Router();

messageRouter.get('/', isAuthenticated, getMessagesController);

export default messageRouter;