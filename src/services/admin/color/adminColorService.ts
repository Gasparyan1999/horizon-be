import { AppDataSource } from "../../../database";
import { Color, CreateColorInput } from "../../../entities/color";

export class AdminColorService {
  public static async addColor(newColor: CreateColorInput) {
    try {
      const colorRepository = AppDataSource.getRepository(Color);
      const color = colorRepository.create(newColor);

      const savedColor = await colorRepository.save(color);

      return savedColor;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  public static async getColors() {
    try {
      const colorRepository = AppDataSource.getRepository(Color);
      const colors = await colorRepository.find();

      return colors;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  public static async removeColor(id: string) {
    try {
      const colorRepository = AppDataSource.getRepository(Color);
      const color = await colorRepository.findOne({ where: { id } });

      if (!color) throw new Error("Navigation bar has not found");
      const removedItem = await colorRepository.remove(color);

      return { ...removedItem, id };
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  public static async updateColor(id: string, updatedColor: CreateColorInput) {
    try {
      const colorRepository = AppDataSource.getRepository(Color);
      const color = await colorRepository.findOne({ where: { id } });

      if (!color) throw new Error("Color has not found");
      color.colorHex = updatedColor.colorHex;
      color.colorName = updatedColor.colorName;
      color.insertIcon = updatedColor.insertIcon;
      color.isArchived = updatedColor.isArchived;

      const updatedItem = await colorRepository.save(color);

      return { ...updatedItem };
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
