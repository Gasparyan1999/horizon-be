import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BeforeInsert,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    length: 100,
  })
  email!: string;

  @Column({
    length: 100,
  })
  name!: string;

  @Column({
    length: 100,
  })
  lastName!: string;

  @Column({
    length: 100,
  })
  password!: string;

  @CreateDateColumn()
  createdDate!: Date;
}

export type CreateUserInput = Omit<User, "id" | "createdDate">;
export type GetUserOutput = User;
