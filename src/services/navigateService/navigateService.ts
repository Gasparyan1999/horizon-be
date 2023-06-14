import { AppDataSource } from "../../database";
import { Admin } from "../../entities/admin";

export class NavigateService {
  public static async getAppNavigate() {
    try {
      const adminRepository = AppDataSource.getRepository(Admin);
      const navBar = await adminRepository.find();

      return navBar;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
