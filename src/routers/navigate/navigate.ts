import Router from "express";
import { navigateController } from "../../controllers/navigate/navigate";

const router = Router();

router.get("/", navigateController.navigate);

export default router;
