import { Router } from "express";
import adminAuthRouter from "./auth/adminAuth";
import adminProductRouter from "./product/adminProduct";
import adminAppContentRouter from "./appContent/appContent";
import adminColorRouter from "./color/adminColor";
import adminSizeRouter from "./size/adminSize";

const router: Router = Router();

router.use("/auth", adminAuthRouter);
router.use("/product", adminProductRouter);
router.use("/appContent", adminAppContentRouter);
router.use("/color", adminColorRouter);
router.use("/size", adminSizeRouter);

export default router;
