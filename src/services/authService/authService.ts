import { User } from "../../entties/user";
import { AppDataSource } from "../../database";
import { generateToken } from "../../functions";
import { env } from "../../environment/env";

export class AuthService {
  public static async userAuth(userName: string) {
    try {
      const userRepository = AppDataSource.getRepository(User);
      let user = await userRepository.findOne({ where: { userName } });

      if (!user) {
        user = userRepository.create({ userName });
        await userRepository.save(user);
      }

      const token = generateToken(
        { id: user.id, userName: user.userName },
        env.secretKey
      );

      return token;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
