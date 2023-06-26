import { DataSource } from "typeorm";
import { User } from "../entities/user";
import { Admin } from "../entities/admin";
import { Color } from "../entities/color";
import { Size } from "../entities/size";
import { Product } from "../entities/product";
import { ProductColor } from "../entities/productColor";
import { env } from "../environment/env";

export const AppDataSource = new DataSource({
  type: env.dbType,
  host: env.dbHost,
  port: env.dbPort,
  username: env.dbUser,
  password: env.dbPassword,
  database: env.dbName,
  entities: [User, Admin, Color, Size, Product, ProductColor],
  synchronize: true,
  logging: false,
  ssl: {
    rejectUnauthorized: false, 
  },
});

export const DBConnecton = async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log("Successfully connected to DB");
    })
    .catch((error) => console.log(error));
};
