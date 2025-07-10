import express from 'express';
import { validate } from '../../validators/zodValidator.js';
import { userSignInSchema, userSignUpSchema } from '../../validators/userSchema.js';
import { signinController, signupController } from '../../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/signup', validate(userSignUpSchema), signupController);
userRouter.post('/signin', validate(userSignInSchema), signinController);

export default userRouter;