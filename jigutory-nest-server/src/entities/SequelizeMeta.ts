import { Column, Entity, Index } from "typeorm";

@Index("name", ["name"], { unique: true })
@Entity("SequelizeMeta", { schema: "jigutory" })
export class SequelizeMeta {
  @Column("varchar", { primary: true, name: "name", length: 255 })
  name: string;
}
