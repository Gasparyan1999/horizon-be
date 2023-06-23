import { Request } from "express";
import { GetUserOutput } from "./entities/user";

export type UserInfo = Omit<GetUserOutput, "password">;

export interface CustomRequest extends Request {
  user?: UserInfo;
}

export type Files =
  | Express.Multer.File[]
  | {
      [fieldname: string]: Express.Multer.File[];
    }
  | undefined;
