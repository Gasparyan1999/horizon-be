import jwt from "jsonwebtoken";

export function generateToken(
  payload: any,
  secret: string,
  expiresIn: string = "infinity"
): string {
  return jwt.sign(payload, secret, { expiresIn });
}
