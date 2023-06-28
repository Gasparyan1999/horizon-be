import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Product } from "./product";

type InsertIcon = "white" | "black";

@Entity()
export class Color {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "jsonb", nullable: true, unique: true })
  colorName!: object;

  @Column({
    length: 100,
    unique: true,
  })
  colorHex!: string;

  @Column({
    length: 100,
  })
  insertIcon!: InsertIcon;

  @Column({
    default: false,
  })
  isArchived!: boolean;

  @ManyToMany(() => Product, (product) => product.colorType)
  @JoinTable()
  products!: Product[];

  @Column({ nullable: true })
  numberOfProducts!: number;

  @CreateDateColumn()
  createdDate!: Date;

  async countNumberOfProducts(): Promise<number> {
    if (this.products) {
      return this.products.length;
    } else {
      return 0;
    }
  }
}

export type CreateColorInput = Omit<
  Color,
  "id" | "createdDate" | "products" | "numberOfProducts"
>;
export type GetColorOutput = Color;
