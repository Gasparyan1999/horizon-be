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

  @CreateDateColumn()
  createdDate!: Date;
}

export type CreateColorInput = Omit<Color, "id" | "createdDate" | "products">;
export type GetColorOutput = Color;
