import Router from "express";
import { AppContentController } from "../../controllers/appContent/appContent";

const router = Router();

router.get("/navigate", AppContentController.navigate);
router.get("/colors", AppContentController.color);
router.get("/size", AppContentController.size);

export default router;
