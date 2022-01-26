import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Badges } from "./Badges";
import { Orders } from "./Orders";

@Entity("users", { schema: "jigutory" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "username", nullable: true, length: 255 })
  username: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 255 })
  password: string | null;

  @Column("longtext", { name: "profileImage", nullable: true })
  profileImage: string | null;

  @Column("varchar", { name: "badge", nullable: true, length: 255 })
  badge: string | null;

  @Column("varchar", { name: "level", nullable: true, length: 255 })
  level: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(() => Badges, (badges) => badges.user)
  badges: Badges[];

  @OneToMany(() => Orders, (orders) => orders.user)
  orders: Orders[];
}
