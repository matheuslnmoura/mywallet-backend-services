

import validateToken from "../middlewares/tokenValidation.js";
import financialEventesRepository from "../repositories/financialEventsRepositories.js";
import financialEventsServices from "../services/financialEventsServices.js";


export async function createFinancialEvent(req, res) {
  const { value, type } = req.body;

  const valueAndTypeExist = await financialEventsServices.checkIfValueAndTypeExists(value, type);

  const validateValueAndType = await financialEventsServices.validateValueAndtype(value, type);

  const user = res.locals.user;

  await financialEventesRepository.insertFinancialEventOnDatabase(user, value, type);

  res.sendStatus(201);

}

export async function getFinancialEvents(req, res) {
  const user = res.locals.user;
  const events = await financialEventesRepository.getFinancialEventsFromDatabase(user);
  res.send(events.rows);
}

export async function getFinancialEventsSum(req, res) {
  const user = res.locals.user;
  const events = await financialEventesRepository.getFinancialEventsFromDatabase(user);
  
  const sum = financialEventsServices.sumEvents(events);

  res.send({ sum });
}