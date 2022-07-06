import jwt from "jsonwebtoken";

async function validateToken(req, res, next) {
  const authorization = req.headers.authorization || "";
  const token = authorization.replace("Bearer ", "");

  if (!token) {
    const errorObject =  {type: 401, message: "Missing token"};
    return res.status(401).send("Missing token")
  }
  const user = jwt.verify(token, process.env.JWT_SECRET);

  if (!user) {
    const errorObject =  {type: 401, message: "Invalid Token"};
    return res.status(401).send("Invalid Token")
  }

  res.locals.user = user;

  next();
}

export default validateToken;
