import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Orders } from "./Orders";
import { Products } from "./Products";

@Index("productId", ["productId"], {})
@Entity("order_product", { schema: "jigutory" })
export class OrderProduct {
  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { primary: true, name: "orderId" })
  orderId: number;

  @Column("int", { primary: true, name: "productId" })
  productId: number;

  @ManyToOne(() => Orders, (orders) => orders.orderProducts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "orderId", referencedColumnName: "id" }])
  order: Orders;

  @ManyToOne(() => Products, (products) => products.orderProducts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "productId", referencedColumnName: "id" }])
  product: Products;
}
