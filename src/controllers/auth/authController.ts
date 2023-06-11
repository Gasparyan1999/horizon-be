import { Request, Response } from "express";
import { AuthService } from "../../services/authService/authService";
import { CreateUserInput } from "../../entties/user";

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
      const token = await AuthService.userSignup(newUser);
      res.send({ token });
    } catch (err: any) {
      res.status(500).send({ message: err.message });
    }
  }

  public static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await AuthService.userLogin(email, password);
      res.send({ token });
    } catch (err: any) {
      res.status(500).send({ message: err.message });
    }
  }
}
