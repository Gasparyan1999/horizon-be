import fs from "fs";
import { AppDataSource } from "../../../database";
import { Admin } from "../../../entities/admin";
import {
  convertToUrl,
  removeFiles,
  removeUrlFromPath,
} from "../../../functions";

export class AdminAppContentService {
  public static async addAppNavigate(
    newNavBar: {
      type: string;
      name: { en: string; ru: string; arm: string };
      isArchived: string;
      priority: number;
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
          exampleOne: convertToUrl(files.exampleOne[0].path),
          exampleTwo: convertToUrl(files.exampleTwo[0].path),
          exampleThree: convertToUrl(files.exampleThree[0].path),
          exampleFour: convertToUrl(files.exampleFour[0].path),
        },
      ]);

      const savedNavBar = await adminRepository.save(navBar);

      return savedNavBar;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  public static async getAppNavigate() {
    try {
      const adminRepository = AppDataSource.getRepository(Admin);
      const navBars = await adminRepository.find();

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
        removeUrlFromPath(navBar.exampleOne),
        removeUrlFromPath(navBar.exampleTwo),
        removeUrlFromPath(navBar.exampleThree),
        removeUrlFromPath(navBar.exampleFour),
      ]);
      if (!removeImages) throw new Error("Can't remove images from folder");
      const removedItem = await adminRepository.remove(navBar);

      return { ...removedItem, id };
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  public static async updateAppNavigate(
    id: string,
    isArchived: boolean,
    priority: number
  ) {
    try {
      const adminRepository = AppDataSource.getRepository(Admin);
      const navBar = await adminRepository.findOne({ where: { id } });

      if (!navBar) throw new Error("Navigation bar has not found");
      navBar.isArchived = isArchived;
      navBar.priority = priority;
      const updatedItem = await adminRepository.save(navBar);

      return { ...updatedItem };
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
