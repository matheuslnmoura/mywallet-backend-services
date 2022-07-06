import connection from "../src/database.js";


async function searchUserOnDatabase(email) {
  try {
    const existingUsers = (await connection.query(
      `SELECT * FROM "users" WHERE "email"=$1`,
      [email]
    )).rows;
  
      return existingUsers;
    
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }

}

async function registerUserOnDatabase(name, email, hashedPassword) {
  try {
    return await connection.query(
      `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
      [name, email, hashedPassword]
    );

  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }

}


const usersRepository = {
  searchUserOnDatabase,
  registerUserOnDatabase
}

export default usersRepository;

