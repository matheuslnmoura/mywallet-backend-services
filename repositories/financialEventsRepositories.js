import connection from "../src/database.js";

async function insertFinancialEventOnDatabase(user, value, type) {
  try {
    await connection.query(
      `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
      [user.id, value, type]
    );
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }

}

async function getFinancialEventsFromDatabase(user) {
  try {
    const events = await connection.query(
      `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
      [user.id]
    );
    return events;
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

const financialEventesRepository = {
  insertFinancialEventOnDatabase,
  getFinancialEventsFromDatabase
}

export default financialEventesRepository;