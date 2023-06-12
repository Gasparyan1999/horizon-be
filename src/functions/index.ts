import jwt from "jsonwebtoken";
import { CreateUserInput } from "../entties/user";

export function generateToken(
  payload: any,
  secret: string,
  expiresIn: string = "24h"
): string {
  return jwt.sign(payload, secret, { expiresIn });
}

export function decodeToken(token: string, secret: string) {
  const decoded = jwt.verify(token, secret);
  return decoded;
}
