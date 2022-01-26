import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderProduct } from "./OrderProduct";
import { Users } from "./Users";

@Index("userId", ["userId"], {})
@Entity("orders", { schema: "jigutory" })
export class Orders {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "location", nullable: true })
  location: number | null;

  @Column("int", { name: "message", nullable: true })
  message: number | null;

  @Column("int", { name: "totalPrice", nullable: true })
  totalPrice: number | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "userId", nullable: true })
  userId: number | null;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order)
  orderProducts: OrderProduct[];

  @ManyToOne(() => Users, (users) => users.orders, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: Users;
}
