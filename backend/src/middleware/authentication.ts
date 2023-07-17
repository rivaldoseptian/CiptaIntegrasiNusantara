import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../helpers/jwt";
import User from "../models/User";

interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    email: string;
  };
}

async function authentication(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    let access_token: any = req.headers.access_token;

    if (!access_token) throw { name: "Unauthenticated" };

    let payload = verifyToken(access_token);
    let user = await User.findByPk(payload.id);
    if (!user) throw { name: "Unauthenticated" };

    req.user = {
      id: user.id,
      email: user.email,
    };

    next();
  } catch (error) {
    next(error);
  }
}

export default authentication;
