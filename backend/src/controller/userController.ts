import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import { hashPassword, comparePassword } from "../helpers/bcrypt";
import { signToken } from "../helpers/jwt";

class UserController {
  public static async register(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { name, email, password } = req.body;
      if (!password) throw { name: "Password Required" };
      const hashedPassword = await hashPassword(password);
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      res.status(201).json({ message: "success register" });
    } catch (error) {
      next(error);
    }
  }

  public static async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw { name: "Email_Password_required" };

      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) throw { name: "invalid email/password" };
      const isPassword = comparePassword(password, user.password);
      if (!isPassword) throw { name: "invalid email/password" };
      const payload = {
        id: user.id,
      };
      const access_token = signToken(payload);
      res.status(200).json({ access_token: access_token });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
