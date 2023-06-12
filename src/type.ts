import { Request } from "express";
import { GetUserOutput } from "./entties/user";

export type UserInfo = Omit<GetUserOutput, "password">;

export interface CustomRequest extends Request {
  user?: UserInfo;
}
