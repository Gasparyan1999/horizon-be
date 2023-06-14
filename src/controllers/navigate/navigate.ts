import { Request, Response } from "express";
import HttpStatusCode from "../../helpers/StatusCodes";
import { CustomRequest } from "../../type";
import { NavigateService } from "../../services/navigateService/navigateService";

export class navigateController {
  public static async navigate(req: CustomRequest, res: Response) {
    try {
      const navBar = await NavigateService.getAppNavigate();

      res.send({ navBar });
    } catch (err: any) {
      res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send({ message: err.message });
    }
  }
}
