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

  @Column({ type: "jsonb", nullable: true })
  name!: object;

  @Column({
    length: 100,
    unique: true,
  })
  type!: string;

  @Column({
    default: false,
  })
  isArchived!: boolean;

  @Column({
    default: 0,
  })
  priority!: number;

  @CreateDateColumn()
  createdDate!: Date;

  @Column({
    nullable: true,
  })
  exampleOne!: string;

  @Column({
    nullable: true,
  })
  exampleTwo!: string;

  @Column({
    nullable: true,
  })
  exampleThree!: string;

  @Column({
    nullable: true,
  })
  exampleFour!: string;
}

export type CreateAdminInput = Omit<Admin, "id" | "createdDate">;
export type GetAdminOutput = Admin;
export type GetAdminOutputWithBuffer = Omit<
  GetAdminOutput,
  "exampleOne" | "exampleTwo" | "exampleThree" | "exampleFour"
> & {
  exampleOne: Buffer;
  exampleTwo: Buffer;
  exampleThree: Buffer;
  exampleFour: Buffer;
};
