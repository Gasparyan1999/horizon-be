import { Response } from "express";
import HttpStatusCode from "../../../helpers/StatusCodes";
import { CustomRequest } from "../../../type";
import { AdminAppContentService } from "../../../services/admin/appContent/adminAppContentServie";

export class AdminAppContentController {
  public static async addNavigate(req: CustomRequest, res: Response) {
    try {
      const files = req.files;
      const newNavBar = req.body;
      const navBar = await AdminAppContentService.addAppNavigate(
        newNavBar,
        files
      );

      res.send({ navBar });
    } catch (err: any) {
      res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send({ message: err.message });
    }
  }
}
