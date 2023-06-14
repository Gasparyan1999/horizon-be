import { Response, NextFunction } from "express";
import HttpStatusCode from "../helpers/StatusCodes";
import { CustomRequest } from "../type";

export class AdminMiddleware {
  public static async adminChecking(
    req: CustomRequest,
    res: Response,
    next: NextFunction
  ) {
    try {
      if (req.user?.userType !== "admin")
        throw new Error("Invalid Access for user");

      next();
    } catch (error: any) {
      return res
        .status(HttpStatusCode.FORBIDDEN)
        .json({ message: error.mesage });
    }
  }
}
