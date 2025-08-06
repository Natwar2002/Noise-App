import { Router } from 'express';
import { isAuthenticated } from '../../middlewares/authMiddleware.js';
import { getDMsMessagesController, getGroupMessagesController } from '../../controllers/messageController.js';

const messageRouter = Router();

messageRouter.get('/group-messages/:group', isAuthenticated, getGroupMessagesController);
messageRouter.get('/dm-messages/:dm', isAuthenticated, getDMsMessagesController);

export default messageRouter;