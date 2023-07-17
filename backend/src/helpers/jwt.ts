import jwt from "jsonwebtoken";

const KEY: string = process.env.JWT_SECRET || "";

const signToken = (payload: any): string => jwt.sign(payload, KEY);
const verifyToken = (token: string): any => jwt.verify(token, KEY);

export { signToken, verifyToken };
