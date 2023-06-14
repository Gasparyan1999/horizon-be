import { AppDataSource, DBConnecton } from ".";
import { Admin } from "../entities/admin";

async function seed() {
  const adminRepository = AppDataSource.getRepository(Admin);

  // Create seed data
  const admins = [
    {
      name: "Popular",
      type: "popular",
      exampleOne: "example",
      exampleTwo: "example",
      exampleThree: "example",
      exampleFour: "example",
    },
    {
      name: "Shirts",
      type: "shirt",
      exampleOne: "example",
      exampleTwo: "example",
      exampleThree: "example",
      exampleFour: "example",
    },
    {
      name: "Blouses",
      type: "blouse",
      exampleOne: "example",
      exampleTwo: "example",
      exampleThree: "example",
      exampleFour: "example",
    },
    {
      name: "Shoose",
      type: "shoose",
      exampleOne: "example",
      exampleTwo: "example",
      exampleThree: "example",
      exampleFour: "example",
    },
    {
      name: "Sale",
      type: "sale",
      exampleOne: "example",
      exampleTwo: "example",
      exampleThree: "example",
      exampleFour: "example",
    },
  ];

  await adminRepository.save(admins);
}

const generateSeedes = async () => {
  try {
    await DBConnecton();
    await seed();
    console.log("Seed generated");
  } catch (err) {
    console.log(err);
  }
};

generateSeedes();
