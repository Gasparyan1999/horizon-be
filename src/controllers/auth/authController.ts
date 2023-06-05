import { Request, Response } from "express";
import { AuthService } from "../../services/authService/authService";

export class AuthController {
  public static async auth(req: Request, res: Response) {
    try {
      const { userName } = req.body;
      const token = await AuthService.userAuth(userName);
      res.send({ token });
    } catch (err: any) {
      res.status(500).send({ message: err.message });
    }
  }
}

