import { Router } from "express";
import authRouter from "./auth/auth";
import appContentRouter from "./appContent/appContent";

const router: Router = Router();

router.use("/auth", authRouter);
router.use("/appContent", appContentRouter);

export default router;
