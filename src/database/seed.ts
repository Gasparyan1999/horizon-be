import { AppDataSource, DBConnecton } from ".";
import { Admin, CreateAdminInput } from "../entities/admin";
import { Color, CreateColorInput } from "../entities/color";
import { CreateSizeInput, Size } from "../entities/size";

async function seed() {
  const adminRepository = AppDataSource.getRepository(Admin);

  // Create seed data
  const admins: Array<CreateAdminInput> = [
    {
      name: {
        arm: "Pahanjvac",
        en: "Popular",
        ru: "Popularni",
      },
      type: "popular",
      exampleOne: "example",
      exampleTwo: "example",
      exampleThree: "example",
      exampleFour: "example",
    },
    {
      name: {
        arm: "Vernashapik",
        en: "Shirt",
        ru: "Mayka",
      },
      type: "shirt",
      exampleOne: "example",
      exampleTwo: "example",
      exampleThree: "example",
      exampleFour: "example",
    },
    {
      name: {
        arm: "Sviter",
        en: "Shirt",
        ru: "Sviter",
      },
      type: "blouse",
      exampleOne: "example",
      exampleTwo: "example",
      exampleThree: "example",
      exampleFour: "example",
    },
    {
      name: {
        arm: "Sviter",
        en: "Shirt",
        ru: "Sviter",
      },
      type: "shoose",
      exampleOne: "example",
      exampleTwo: "example",
      exampleThree: "example",
      exampleFour: "example",
    },
    {
      name: {
        arm: "Zexchvac",
        en: "Sale",
        ru: "Skidki",
      },
      type: "sale",
      exampleOne: "example",
      exampleTwo: "example",
      exampleThree: "example",
      exampleFour: "example",
    },
  ];

  await adminRepository.save(admins);
}

async function colorSeed() {
  const colorRepository = AppDataSource.getRepository(Color);

  const colors: Array<CreateColorInput> = [
    {
      colorName: {
        arm: "Karmir",
        en: "Red",
        ru: "Krasni",
      },
      colorHex: "#ff0000",
      insertIcon: "white",
    },
    {
      colorName: {
        arm: "Sev",
        en: "Black",
        ru: "Chorni",
      },
      colorHex: "#000000",
      insertIcon: "white",
    },
    {
      colorName: {
        arm: "Kapuyt",
        en: "Blue",
        ru: "Siniy",
      },
      colorHex: "#0000ff",
      insertIcon: "white",
    },
    {
      colorName: {
        arm: "Shaganakaguyn",
        en: "Brown",
        ru: "Karichnvi",
      },
      colorHex: "#964B00",
      insertIcon: "white",
    },
    {
      colorName: {
        arm: "Kanach",
        en: "Green",
        ru: "Zelyoni",
      },
      colorHex: "#3cb043",
      insertIcon: "white",
    },
    {
      colorName: {
        arm: "Moxraguyn",
        en: "Grey",
        ru: "Seriy",
      },
      colorHex: "#808080",
      insertIcon: "white",
    },
    {
      colorName: {
        arm: "Narnjaguyn",
        en: "Orange",
        ru: "Oranjvi",
      },
      colorHex: "#FFA500",
      insertIcon: "white",
    },
    {
      colorName: {
        arm: "Spitak",
        en: "White",
        ru: "Beliy",
      },
      colorHex: "#f2f2f2",
      insertIcon: "black",
    },
    {
      colorName: {
        arm: "Dexin",
        en: "Yellow",
        ru: "Jolti",
      },
      colorHex: "#FFFF00",
      insertIcon: "white",
    },
  ];

  await colorRepository.save(colors);
}

async function sizeSeed() {
  const sizeRepository = AppDataSource.getRepository(Size);

  const size: Array<CreateSizeInput> = [
    {
      sizeName: "XS",
    },
    {
      sizeName: "S",
    },
    {
      sizeName: "M",
    },
    {
      sizeName: "L",
    },
    {
      sizeName: "XL",
    },
    {
      sizeName: "XXL",
    },
  ];

  await sizeRepository.save(size);
}

const generateSeedes = async () => {
  try {
    await DBConnecton();
    // await seed();
    // await colorSeed();
    // await sizeSeed();
    console.log("Seed generated");
  } catch (err) {
    console.log(err);
  }
};

generateSeedes();
