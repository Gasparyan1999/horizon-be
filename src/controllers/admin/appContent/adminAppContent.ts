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

  public static async getNavigate(req: CustomRequest, res: Response) {
    try {
      const navBar = await AdminAppContentService.getAppNavigate();

      res.send({ navBar });
    } catch (err: any) {
      res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send({ message: err.message });
    }
  }

  public static async removeNavigate(req: CustomRequest, res: Response) {
    try {
      const { id } = req.params;
      if (!id) throw new Error("Id is missing");
      const navBar = await AdminAppContentService.removeAppNavigate(id);

      res.send({ navBar });
    } catch (err: any) {
      res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send({ message: err.message });
    }
  }

  public static async updateNavigate(req: CustomRequest, res: Response) {
    try {
      const { id } = req.params;
      const { isArchived } = req.body;
      if (!id) throw new Error("Id is missing");
      const navBar = await AdminAppContentService.updateAppNavigate(
        id,
        isArchived
      );

      res.send({ navBar });
    } catch (err: any) {
      res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send({ message: err.message });
    }
  }
}
