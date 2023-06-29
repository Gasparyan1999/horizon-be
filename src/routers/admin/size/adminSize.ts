import Router from "express";
import { AdminSizeController } from "../../../controllers/admin/size/adminSizeController";

const router = Router();

router.get("/", AdminSizeController.getSize);
router.post("/", AdminSizeController.addSize);
router.put("/:id", AdminSizeController.updateSize);
router.delete("/:id", AdminSizeController.removeSize);

export default router;
