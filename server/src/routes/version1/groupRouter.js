import { Router } from 'express';
import { createGroupController, getGroupsController, updateGroupController, deleteGroupController, addUserToGroupController, getGroupByIdController } from '../../controllers/groupController.js';
import { isAuthenticated } from '../../middlewares/authMiddleware.js';

const groupRouter = Router();

groupRouter.post('/', isAuthenticated, createGroupController);
groupRouter.get('/:groupId', isAuthenticated, getGroupByIdController);
groupRouter.get('/', isAuthenticated, getGroupsController);
groupRouter.put('/:id', isAuthenticated, updateGroupController);
groupRouter.delete('/:id', isAuthenticated, deleteGroupController);
groupRouter.post('/:id/addUser', isAuthenticated, addUserToGroupController);

export default groupRouter;