import jwt from "jsonwebtoken";

export function generateToken(
  payload: any,
  secret: string,
  expiresIn: string = "60"
): string {
  return jwt.sign(payload, secret, { expiresIn });
}
