import { Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import HttpStatusCode from "../helpers/StatusCodes";
import { env } from "../environment/env";
import { decodeToken } from "../functions";
import { CustomRequest, UserInfo } from "../type";
import { AppDataSource } from "../database";
import { User } from "../entities/user";

export class AuthMiddleware {
  public static async tokenVerification(
    req: CustomRequest,
    res: Response,
    next: NextFunction
  ) {
    try {
      const token = req.header("Authorization")?.split(" ")[1];
      if (!token) {
        return res
          .status(HttpStatusCode.UNAUTHORIZED)
          .json({ message: "Missing token" });
      }

      const decodedToken = decodeToken(token, env.secretKey) as JwtPayload;
      const userRepository = AppDataSource.getRepository(User);
      const findUser = await userRepository.findOne({
        where: { email: decodedToken.email },
      });

      if (!findUser)
        return res
          .status(HttpStatusCode.UNAUTHORIZED)
          .json({ message: "Wrong token" });

      const user: UserInfo = {
        id: findUser.id,
        name: findUser.name,
        lastName: findUser.lastName,
        email: findUser.email,
        createdDate: findUser.createdDate,
        userType: findUser.userType,
      };
      req.user = user;

      next();
    } catch (error) {
      return res
        .status(HttpStatusCode.UNAUTHORIZED)
        .json({ message: "Invalid token" });
    }
  }
}
