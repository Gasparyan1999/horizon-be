import { Request, Response } from "express";
import HttpStatusCode from "../../helpers/StatusCodes";
import { CustomRequest } from "../../type";
import { AppContentService } from "../../services/appContentService/appContentService";

export class AppContentController {
  public static async navigate(req: CustomRequest, res: Response) {
    try {
      const navBar = await AppContentService.getAppNavigate();

      res.send({ navBar });
    } catch (err: any) {
      res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send({ message: err.message });
    }
  }

  public static async color(req: CustomRequest, res: Response) {
    try {
      const colors = await AppContentService.getAppColor();

      res.send({ colors });
    } catch (err: any) {
      res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send({ message: err.message });
    }
  }

  public static async size(req: CustomRequest, res: Response) {
    try {
      const sizes = await AppContentService.getAppSize();

      res.send({ sizes });
    } catch (err: any) {
      res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send({ message: err.message });
    }
  }
}
