import usersRepository from "../repositories/usersRepository.js";
import usersServices from "../services/usersServices.js";


export async function registerUser(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw {type: 400, message: "Please fill all the inputs"}
  }

  const existingUser = await usersRepository.searchUserOnDatabase(email);

  if (existingUser.length > 0) {
    throw {type: 402, message: "User already registred"}
  }

  const hashedPassword = await usersServices.createPasswordHash(password);

  const createUserResponse = await usersRepository.registerUserOnDatabase(name, email, hashedPassword);

  if (createUserResponse.rowCount === 0) {
    throw {type: 500, message: "Something went wrong :(. Please, try again later"}
  }

  return res.sendStatus(200);
}

export async function loginUser(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.sendStatus(422);
  }

  const user  = (await usersRepository.searchUserOnDatabase(email))[0];

  const validateUserInfo = await usersServices.validateUserInfo(user, password);

  if(!validateUserInfo) {
    throw {type: 401, message: 'Email or Password incorrect'}
  };

  const token = await usersServices.createToken(user);

  res.send({
    token,
  });
}