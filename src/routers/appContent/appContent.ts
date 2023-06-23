import Router from "express";
import { appContentController } from "../../controllers/appContent/appContent";

const router = Router();

router.get("/navigate", appContentController.navigate);
router.get("/colors", appContentController.color);
router.get("/size", appContentController.size);

export default router;
