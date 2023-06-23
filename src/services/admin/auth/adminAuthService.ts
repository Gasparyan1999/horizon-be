import bcrypt from "bcrypt";
import { AppDataSource } from "../../../database";
import { User } from "../../../entities/user";
import { env } from "../../../environment/env";
import { generateToken } from "../../../functions";

export class AdminAuthService {
  public static async adminUserLogin(email: string, password: string) {
    try {
      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOne({
        where: { email, userType: "admin" },
      });

      if (!user) throw new Error("Invalid Email or Password");
      const storedHashedPassword = user?.password;

      const isPasswordMatch = await bcrypt.compare(
        password,
        storedHashedPassword
      );

      if (!isPasswordMatch) throw new Error("Invalid Email or Password");

      const token = generateToken(
        {
          id: user.id,
          email: user.email,
          name: user.name,
          lastName: user.lastName,
          createdDate: user.createdDate,
          userType: user.userType,
        },
        env.secretKey
      );

      return {
        token,
        user: {
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          id: user.id,
          createdDate: user.createdDate,
          userType: user.userType,
        },
      };
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
