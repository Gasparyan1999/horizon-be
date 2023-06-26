import dotenv from "dotenv";
dotenv.config();

export const env: any = {
  port: process.env.PORT,
  socketPort: process.env.SOCKET_PORT ?? 5000,
  secretKey: process.env.SECRET_KEY ?? "my-secret-key",
  originUrl: process.env.ORIGIN_URL,
  saltRounds: process.env.SALT_ROUNDS ?? 10,
  dbPort: process.env.DB_PORT,
  dbType: process.env.DB_TYPE ?? "postgres",
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
};
