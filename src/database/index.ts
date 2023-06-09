import { DataSource } from "typeorm";
import { User } from "../entties/user";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "goshamaks1999",
  database: "horizon",
  entities: [User],
  synchronize: true,
  logging: false,
});

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
export const DBConnecton = async () => {
  AppDataSource.initialize()
    .then(() => {
      console.log("Successfully connected to DB");
      // here you can start to work with your database
    })
    .catch((error) => console.log(error));
};
