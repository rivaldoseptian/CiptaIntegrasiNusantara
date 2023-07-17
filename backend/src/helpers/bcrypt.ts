import bcrypt from "bcryptjs";

const hashPassword = (password: string): string => bcrypt.hashSync(password, 8);

const comparePassword = (password: string, passwordHash: string): boolean =>
  bcrypt.compareSync(password, passwordHash);

export { hashPassword, comparePassword };
