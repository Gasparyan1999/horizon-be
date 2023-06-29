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
export class Size {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    length: 100,
    unique: true,
  })
  sizeName!: string;

  @Column({
    default: false,
  })
  isArchived!: boolean;

  @Column({
    default: 0,
  })
  priority!: number;

  @ManyToMany(() => Product, (product) => product.colorType)
  @JoinTable()
  products!: Product[];

  @CreateDateColumn()
  createdDate!: Date;
}

export type CreateSizeInput = Omit<Size, "id" | "createdDate" | "products">;
export type GetSizeOutput = Size;
