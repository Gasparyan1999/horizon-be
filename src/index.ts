import "reflect-metadata";
import express, { Request, Response } from "express";
import cors from "cors";
import { env } from "./environment/env";

const router = require("./routers/index");

import { DBConnecton } from "./database";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, World!");
});

const port = env.port ?? 8080;

app.listen(port, async () => {
  try {
    await DBConnecton();
    console.log(`Server running on port ${port}`);
  } catch (err) {
    console.log(err);
  }
});
