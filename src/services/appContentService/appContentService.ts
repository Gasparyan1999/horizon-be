import fs from "fs";
import { AppDataSource } from "../../database";
import { Admin } from "../../entities/admin";
import { Color } from "../../entities/color";
import { Size } from "../../entities/size";

export class AppContentService {
  public static async getAppNavigate() {
    try {
      const adminRepository = AppDataSource.getRepository(Admin);
      const navBars = await adminRepository.find();

      for (const navBar of navBars) {
        navBar.exampleOne = fs.readFileSync(navBar.exampleOne, {
          encoding: "base64",
        });
        navBar.exampleTwo = fs.readFileSync(navBar.exampleTwo, {
          encoding: "base64",
        });
        navBar.exampleThree = fs.readFileSync(navBar.exampleThree, {
          encoding: "base64",
        });
        navBar.exampleFour = fs.readFileSync(navBar.exampleFour, {
          encoding: "base64",
        });
      }

      return navBars;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  public static async getAppColor() {
    try {
      const colorRepository = AppDataSource.getRepository(Color);
      const colors = await colorRepository.find();

      return colors;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  public static async getAppSize() {
    try {
      const sizeRepository = AppDataSource.getRepository(Size);
      const sizes = await sizeRepository.find();

      return sizes;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
