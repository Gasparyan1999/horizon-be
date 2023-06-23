import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinTable,
  ManyToMany,
} from "typeorm";
import { Product } from "./product";

@Entity()
export class ProductColor {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    length: 100,
  })
  colorName!: string;

  @Column({
    length: 100,
  })
  colorHex!: string;

  @Column({
    default: false,
  })
  isArchived!: boolean;

  @Column("text", { array: true })
  photos!: string[];

  @ManyToMany(() => Product, (product) => product.colorType)
  @JoinTable()
  products!: Product[];

  @CreateDateColumn()
  createdDate!: Date;
}

export type CreateProductColorInput = Omit<ProductColor, "id" | "createdDate">;
export type GetProductColorOutput = ProductColor;
