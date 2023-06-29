import { AppDataSource } from "../../../database";
import { CreateSizeInput, Size } from "../../../entities/size";

export class AdminSizeService {
  public static async addSize(newSize: CreateSizeInput) {
    try {
      const sizeRepository = AppDataSource.getRepository(Size);
      const size = sizeRepository.create({
        ...newSize,
        sizeName: newSize.sizeName.toLowerCase(),
      });

      const savedSize = await sizeRepository.save(size);

      return savedSize;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  public static async getSizes() {
    try {
      const sizeRepository = AppDataSource.getRepository(Size);
      const sizes = await sizeRepository.find();

      return sizes;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  public static async removeSize(id: string) {
    try {
      const sizeRepository = AppDataSource.getRepository(Size);
      const size = await sizeRepository.findOne({ where: { id } });

      if (!size) throw new Error("Size has not found");
      const removedItem = await sizeRepository.remove(size);

      return { ...removedItem, id };
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  public static async updateSize(id: string, updatedSize: CreateSizeInput) {
    try {
      const sizeRepository = AppDataSource.getRepository(Size);
      const size = await sizeRepository.findOne({ where: { id } });

      if (!size) throw new Error("Size has not found");
      size.sizeName = updatedSize.sizeName.toLowerCase();
      size.isArchived = updatedSize.isArchived;

      const updatedItem = await sizeRepository.save(size);

      return { ...updatedItem };
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
