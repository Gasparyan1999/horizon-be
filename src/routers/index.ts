import { Router } from "express";
import authRouter from "./auth/auth";
import navigateRouter from "./navigate/navigate";

const router: Router = Router();

router.use("/auth", authRouter);
router.use("/navigate", navigateRouter);

export default router;
