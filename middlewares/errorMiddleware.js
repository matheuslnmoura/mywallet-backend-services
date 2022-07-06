
export default function errorHandlingMiddleware(error, req, res, next) {
  return res.status(error.type).send(error.message);
}