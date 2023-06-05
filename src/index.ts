import "reflect-metadata";
import express, { Request, Response } from "express";
import { env } from "./environment/env";

const app = express();
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, World!");
});

const port = env.port ?? 8080; 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
