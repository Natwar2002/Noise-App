import express from 'express';
import v1Router from './version1/v1Router.js'

const router = express.Router();

router.use('/v1', v1Router);

export default router;