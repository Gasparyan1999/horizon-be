import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { Min, Max } from "class-validator";
import { Size } from "./size";
import { Color } from "./color";
import { ProductColor } from "./productColor";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    length: 100,
  })
  productType!: string;

  @Column({
    default: false,
  })
  isPopular!: boolean;

  @Column({
    default: false,
  })
  isArchived!: boolean;

  @Column({
    length: 20,
  })
  productName!: string;

  @Column({
    length: 60,
  })
  productDescription!: string;

  @Column("integer", {
    nullable: false,
  })
  price!: number;

  @Column("integer", {
    nullable: true,
  })
  @Min(1)
  @Max(10)
  sale!: number;

  @Column("integer", {
    nullable: true,
  })
  count!: number;

  @Column("bytea", {
    nullable: true,
  })
  firstImage!: Buffer;

  @Column("bytea", {
    nullable: true,
  })
  secondImage!: Buffer;

  @CreateDateColumn()
  createdDate!: Date;

  @ManyToMany(() => Color, (color) => color.products)
  colorType!: Color[];

  @ManyToMany(() => ProductColor, (color) => color.products)
  productColor!: ProductColor[];

  @ManyToMany(() => Size, (color) => color.products)
  productSize!: Size[];
}

export type CreateProductInput = Omit<
  Product,
  | "id"
  | "createdDate"
  | "colorType"
  | "productColor"
  | "productSize"
>;
export type GetProductOutput = Product;
