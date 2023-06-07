import dotenv from "dotenv";

export const env = {
  port: process.env.PORT,
  socketPort: process.env.SOCKET_PORT ?? 5000,
  secretKey: process.env.SECRET_KEY ?? "my-secret-key",
  originUrl: process.env.ORIGIN_URL,
};
