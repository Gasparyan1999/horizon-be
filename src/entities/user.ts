import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

type UserType = "admin" | "basic";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    length: 100,
    default: "basic",
  })
  userType!: UserType;

  @Column({
    length: 100,
    unique: true,
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

export type CreateUserInput = Omit<User, "id" | "createdDate" | 'userType'>;
export type GetUserOutput = User;
