import { Router } from 'express';

import { createFinancialEvent, getFinancialEvents, getFinancialEventsSum } from '../controllers/financialEventsController.js';
import validateToken from '../middlewares/tokenValidation.js';

const financialEventsRouter = Router();

financialEventsRouter.post("/financial-events", validateToken, createFinancialEvent);
financialEventsRouter.get("/financial-events", validateToken, getFinancialEvents);
financialEventsRouter.get("/financial-events/sum", validateToken, getFinancialEventsSum);

export default financialEventsRouter;
