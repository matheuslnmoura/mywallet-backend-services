import { Router } from 'express';

import usersRouter from "./usersRouter.js";
import financialEventsRouter from "./financialEventsrouter.js";
import errorHandlingMiddleware from "../middlewares/errorMiddleware.js";

const router = Router();

router.use(usersRouter);
router.use(financialEventsRouter);
router.use(errorHandlingMiddleware);

export default router;