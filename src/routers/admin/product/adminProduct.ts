import Router from "express";
import { AdminProductController } from "../../../controllers/admin/product/adminProductController";

const router = Router();

router.get("/", AdminProductController.adminSaveProduct);

export default router;
