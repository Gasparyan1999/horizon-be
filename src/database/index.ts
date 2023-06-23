import { DataSource } from "typeorm";
import { User } from "../entities/user";
import { Admin } from "../entities/admin";
import { Color } from "../entities/color";
import { Size } from "../entities/size";
import { Product } from "../entities/product";
import { ProductColor } from "../entities/productColor";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "goshamaks1999",
  database: "horizon",
  entities: [User, Admin, Color, Size, Product, ProductColor],
  synchronize: true,
  logging: false,
});

export const DBConnecton = async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log("Successfully connected to DB");
    })
    .catch((error) => console.log(error));
};
