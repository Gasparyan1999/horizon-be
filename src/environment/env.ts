import dotenv from "dotenv";

export const env = {
  port: process.env.PORT,
  secretKey: process.env.SECRET_KEY ?? "my-secret-key",
};
