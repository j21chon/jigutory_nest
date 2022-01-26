import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index("userId", ["userId"], {})
@Entity("badges", { schema: "jigutory" })
export class Badges {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "clickNum", nullable: true })
  clickNum: number | null;

  @Column("int", { name: "carbonReduction", nullable: true })
  carbonReduction: number | null;

  @Column("int", { name: "levelNum", nullable: true })
  levelNum: number | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "userId", nullable: true })
  userId: number | null;

  @ManyToOne(() => Users, (users) => users.badges, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: Users;
}
