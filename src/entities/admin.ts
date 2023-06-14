import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Admin {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    length: 100,
    unique: true,
  })
  name!: string;

  @Column({
    length: 100,
    unique: true,
  })
  type!: string;

  @Column({
    length: 100,
  })
  exampleOne!: string;

  @Column({
    length: 100,
  })
  exampleTwo!: string;

  @Column({
    length: 100,
  })
  exampleThree!: string;

  @Column({
    length: 100,
  })
  exampleFour!: string;

  @CreateDateColumn()
  createdDate!: Date;
}

export type CreateAdminInput = Omit<Admin, "id" | "createdDate">;
export type GetAdminOutput = Admin;
