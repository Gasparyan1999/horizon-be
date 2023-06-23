import { Request, Response } from "express";
import HttpStatusCode from "../../../helpers/StatusCodes";
import { AdminAuthService } from "../../../services/admin/auth/adminAuthService";

export class AdminAuthController {
  public static async adminLogin(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const { token, user } = await AdminAuthService.adminUserLogin(
        email,
        password
      );
      res.send({ token, user });
    } catch (err: any) {
      res.status(HttpStatusCode.UNAUTHORIZED).send({ message: err.message });
    }
  }
}
