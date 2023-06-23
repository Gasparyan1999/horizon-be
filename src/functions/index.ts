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

export const handleImageUpload = (file: Express.Multer.File): Buffer => {
  const buffer = Buffer.from(file.buffer);
  return buffer;
};

export async function saveFile(file: Express.Multer.File, fileName: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const filePath = `../uploads/${fileName}`;

    const writeStream = fs.createWriteStream(filePath);
    writeStream.on("finish", () => {
      // Путь к сохраненному файлу
      const fileUrl = `/uploads/${fileName}`;
      resolve(fileUrl);
    });
    writeStream.on("error", reject);

    // Запись файла в файловую систему
    writeStream.write(file.buffer);
    writeStream.end();
  });
}

