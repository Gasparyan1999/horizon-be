import { AppDataSource } from "../../../database";
import { CreateProductInput, Product } from "../../../entities/product";
import { Color } from "../../../entities/color";

export class AdminProdcutService {
  public static async adminProductSave() {
    try {
      const productRepository = AppDataSource.getRepository(Product);
      const colorType = AppDataSource.getRepository(Color);

      // 0c516f15-ea9d-4c4d-9f6f-f597fc7f3cf7
      // 2a7819fa-6b8b-4cb9-b525-752cf652e17a

      // const newProduct: CreateProductInput = {
      //   productType: "Ty2",
      //   isPopular: true,
      //   isArchived: false,
      //   productName: "Product Name",
      //   productDescription: "Product Description",
      //   price: 10,
      //   sale: 5,
      //   count: 100,
      //   firstImage: Buffer.from("First Image Data"),
      //   secondImage: Buffer.from("Second Image Data"),
      // };
      // const product = productRepository.create(newProduct);
      // const color = await colorType.findOne({
      //   where: { id: "0c516f15-ea9d-4c4d-9f6f-f597fc7f3cf7" },
      // });
      // if (!color) return;
      // product.colorType = [color];

      // const save = await productRepository.save(product);
      // const product = await productRepository.find({
      //   where: { id: "221444de-37d2-4905-907a-4558715e7619" },
      //   relations: ["colorType"],
      //   take: 1,
      // });
      const product = await productRepository.find({
        where: { id: "221444de-37d2-4905-907a-4558715e7619" },
      });
      
      if (product) {
        await productRepository.remove(product);
        console.log("Product deleted successfully");
      } else {
        console.log("Product not found");
      }
      return product;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
