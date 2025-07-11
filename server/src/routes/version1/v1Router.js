import express from 'express';
import userRouter from './userRouter.js';
import groupRouter from './groupRouter.js';

const v1Router = express.Router();

v1Router.use('/auth', userRouter);
v1Router.use('/groups', groupRouter);

export default v1Router;