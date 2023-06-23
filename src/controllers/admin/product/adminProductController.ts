import { Request, Response } from "express";
import HttpStatusCode from "../../../helpers/StatusCodes";
import { AdminProdcutService } from "../../../services/admin/product/adminProductSevice";

export class AdminProductController {
  public static async adminSaveProduct(req: Request, res: Response) {
    try {
      const data = await AdminProdcutService.adminProductSave();
      res.send({ data });
    } catch (err: any) {
      res.status(HttpStatusCode.UNAUTHORIZED).send({ message: err.message });
    }
  }
}
