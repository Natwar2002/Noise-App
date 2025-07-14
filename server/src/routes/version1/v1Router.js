import express from 'express';
import userRouter from './userRouter.js';
import groupRouter from './groupRouter.js';
import dmRouter from './dmRouter.js';
import messageRouter from './messageRouter.js';

const v1Router = express.Router();

v1Router.use('/auth', userRouter);
v1Router.use('/groups', groupRouter);
v1Router.use('/dms', dmRouter);
v1Router.use('/messages', messageRouter);

export default v1Router;