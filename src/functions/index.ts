import jwt from "jsonwebtoken";
import fs from "fs";

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

export const removeFiles = (filePaths: Array<string>): Boolean => {
  for (let i = 0; i < filePaths.length; i++) {
    if (!fs.existsSync(filePaths[i]) || !fs.statSync(filePaths[i]).isFile())
      return false;
  }

  for (let i = 0; i < filePaths.length; i++) {
    fs.unlinkSync(filePaths[i]);
  }

  return true;
};
