import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function createPasswordHash (password) {
  const hashedPassword = bcrypt.hashSync(password, 12);
  return hashedPassword;
}

async function validateUserInfo(user, password) {
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return false;
  }
  return true;
}

async function createToken(user) {
  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET
  );

  return token;
}

const usersServices = {
  createPasswordHash, 
  validateUserInfo,
  createToken
}

export default usersServices;