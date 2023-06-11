import bcrypt from "bcrypt";
import { User, CreateUserInput } from "../../entties/user";
import { AppDataSource } from "../../database";
import { generateToken } from "../../functions";
import { env } from "../../environment/env";

export class AuthService {
  public static async userSignup(newUser: CreateUserInput) {
    try {
      const userRepository = AppDataSource.getRepository(User);
      let user = await userRepository.findOne({
        where: { email: newUser.email },
      });

      if (!user) {
        console.log(newUser.password);
        const hashedPassword = await bcrypt.hash(
          newUser.password,
          +env.saltRounds
        );
        user = userRepository.create({ ...newUser, password: hashedPassword });
        await userRepository.save(user);
      } else {
        throw new Error("User with this email already exict");
      }

      const token = generateToken(
        { id: user.id, email: user.email },
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
        },
      };
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  public static async userLogin(email: string, password: string) {
    try {
      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOne({
        where: { email },
      });

      if (!user) throw new Error("Invalid Email or Password");
      const storedHashedPassword = user?.password;

      const isPasswordMatch = await bcrypt.compare(
        password,
        storedHashedPassword
      );

      if (!isPasswordMatch) throw new Error("Invalid Email or Password");

      const token = generateToken(
        { id: user.id, email: user.email },
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
        },
      };
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
