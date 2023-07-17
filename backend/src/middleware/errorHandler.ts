import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  let status = 500;
  let message = "Internal Server Error";

  switch (error.name) {
    case "Password Required":
      status = 400;
      message = "Password Required";
      break;
    case "Forbidden":
      status = 403;
      message = "You are not authorized";
      break;
    case "Email_Password_required":
      status = 400;
      message = "Email/Password required";
      break;
    case "invalid email/password":
      status = 404;
      message = "Invalid email/password";
      break;
    case "Not Found":
    case "User Not Found":
      status = 404;
      message = "Data Not Found";
      break;
    case "SequelizeValidationError":
    case "SequelizeUniqueValidationError":
    case "SequelizeUniqueConstraintError":
      status = 400;
      message = error.errors[0].message;
      break;
    case "Unauthenticated":
    case "JsonWebTokenError":
      status = 401;
      message = "Unauthenticated";
      break;
    default:
      status = 500;
      message = "Internal Server Error";
      break;
  }

  response.status(status).json({ message: message });
};

export default errorHandler;
