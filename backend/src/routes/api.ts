import { Request, Response, Router } from "express";
import UserController from "../controller/userController";
import authentication from "../middleware/authentication";
const router = Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/me", authentication, UserController.profile);

export default router;
