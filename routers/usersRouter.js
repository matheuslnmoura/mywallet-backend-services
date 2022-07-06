import { Router } from 'express';

import { registerUser, loginUser } from '../controllers/usersController.js';

const usersRouter = Router();

usersRouter.post("/sign-up", registerUser);
usersRouter.post("/sign-in", loginUser);

export default usersRouter;
