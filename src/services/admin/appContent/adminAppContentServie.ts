import fs from "fs";
import { AppDataSource } from "../../../database";
import { Admin } from "../../../entities/admin";

export class AdminAppContentService {
  public static async addAppNavigate(
    newNavBar: {
      type: string;
      name: { en: string; ru: string; arm: string };
      isArchived: boolean;
    },
    files: any
  ) {
    try {
      if (!files) {
        throw new Error("Can't upload files");
      }
      const adminRepository = AppDataSource.getRepository(Admin);
      const navBar = adminRepository.create([
        {
          ...newNavBar,
          exampleOne: files.exampleOne[0].path,
          exampleTwo: files.exampleTwo[0].path,
          exampleThree: files.exampleThree[0].path,
          exampleFour: files.exampleFour[0].path,
        },
      ]);
      const savedNavBar = await adminRepository.save(navBar);
      savedNavBar[0].exampleOne = fs.readFileSync(savedNavBar[0].exampleOne, {
        encoding: "base64",
      });
      savedNavBar[0].exampleTwo = fs.readFileSync(savedNavBar[0].exampleTwo, {
        encoding: "base64",
      });
      savedNavBar[0].exampleThree = fs.readFileSync(
        savedNavBar[0].exampleThree,
        {
          encoding: "base64",
        }
      );
      savedNavBar[0].exampleFour = fs.readFileSync(savedNavBar[0].exampleFour, {
        encoding: "base64",
      });

      return savedNavBar;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
