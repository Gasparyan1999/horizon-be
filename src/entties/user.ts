import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

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
