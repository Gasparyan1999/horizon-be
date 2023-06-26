import "reflect-metadata";
import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { env } from "./environment/env";
import { AuthMiddleware } from "./middleware/authMiddlware";
import { AdminMiddleware } from "./middleware/adminVerification";
import router from "./routers/index";
import adminRouter from "./routers/admin/index";
import { DBConnecton } from "./database";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.use("/api", router);
app.use(
  "/admin",
  AuthMiddleware.tokenVerification,
  AdminMiddleware.adminChecking,
  adminRouter
);

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
