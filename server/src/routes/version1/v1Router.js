import express from 'express';
import userRouter from './userRouter.js';
import groupRouter from './groupRouter.js';
import dmRouter from './dmRouter.js';

const v1Router = express.Router();

v1Router.use('/auth', userRouter);
v1Router.use('/groups', groupRouter);
v1Router.use('/dms', dmRouter);

export default v1Router;