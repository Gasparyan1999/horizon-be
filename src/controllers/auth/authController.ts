import { Request, Response } from "express";
import { AuthService } from "../../services/authService/authService";
import { CreateUserInput } from "../../entties/user";
import HttpStatusCode from "../../helpers/StatusCodes";
import { CustomRequest } from "../../type";

export class AuthController {
  public static async signup(req: Request, res: Response) {
    try {
      const { email, name, lastName, password } = req.body;
      const newUser: CreateUserInput = {
        email,
        name,
        lastName,
        password,
      };
      const { token, user } = await AuthService.userSignup(newUser);
      res.send({ token, user });
    } catch (err: any) {
      res.status(HttpStatusCode.UNAUTHORIZED).send({ message: err.message });
    }
  }

  public static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const { token, user } = await AuthService.userLogin(email, password);
      res.send({ token, user });
    } catch (err: any) {
      res.status(HttpStatusCode.UNAUTHORIZED).send({ message: err.message });
    }
  }

  public static async userAccess(req: CustomRequest, res: Response) {
    try {
      const user = req.user;
      res.send({ user });
    } catch (err: any) {
      res.status(HttpStatusCode.UNAUTHORIZED).send({ message: err.message });
    }
  }
}
