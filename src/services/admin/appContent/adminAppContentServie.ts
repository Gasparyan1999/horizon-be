import fs from "fs";
import { AppDataSource } from "../../../database";
import { Admin } from "../../../entities/admin";
import { removeFiles } from "../../../functions";

export class AdminAppContentService {
  public static async addAppNavigate(
    newNavBar: {
      type: string;
      name: { en: string; ru: string; arm: string };
      isArchived: string;
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
          isArchived: newNavBar.isArchived === "false" ? false : true,
          exampleOne: files.exampleOne[0].path,
          exampleTwo: files.exampleTwo[0].path,
          exampleThree: files.exampleThree[0].path,
          exampleFour: files.exampleFour[0].path,
        },
      ]);
      console.log(newNavBar);

      const savedNavBar: any = await adminRepository.save(navBar);
      savedNavBar[0].exampleOne = fs.readFileSync(savedNavBar[0].exampleOne);
      savedNavBar[0].exampleTwo = fs.readFileSync(savedNavBar[0].exampleTwo);
      savedNavBar[0].exampleThree = fs.readFileSync(
        savedNavBar[0].exampleThree
      );
      savedNavBar[0].exampleFour = fs.readFileSync(savedNavBar[0].exampleFour);

      return savedNavBar;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  public static async getAppNavigate() {
    try {
      const adminRepository = AppDataSource.getRepository(Admin);
      const navBars: any = await adminRepository.find();

      for (const navBar of navBars) {
        navBar.exampleOne = fs.readFileSync(navBar.exampleOne);
        navBar.exampleTwo = fs.readFileSync(navBar.exampleTwo);
        navBar.exampleThree = fs.readFileSync(navBar.exampleThree);
        navBar.exampleFour = fs.readFileSync(navBar.exampleFour);
      }

      return navBars;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  public static async removeAppNavigate(id: string) {
    try {
      const adminRepository = AppDataSource.getRepository(Admin);
      const navBar = await adminRepository.findOne({ where: { id } });

      if (!navBar) throw new Error("Navigation bar has not found");
      const removeImages = removeFiles([
        navBar.exampleOne,
        navBar.exampleTwo,
        navBar.exampleThree,
        navBar.exampleFour,
      ]);
      if (!removeImages) throw new Error("Can't remove images from folder");
      const removedItem = await adminRepository.remove(navBar);

      return { ...removedItem, id };
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
