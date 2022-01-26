import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cafeinfos", { schema: "jigutory" })
export class Cafeinfos {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("varchar", { name: "keyword", nullable: true, length: 255 })
  keyword: string | null;

  @Column("double", { name: "latitude", nullable: true, precision: 22 })
  latitude: number | null;

  @Column("double", { name: "longitude", nullable: true, precision: 22 })
  longitude: number | null;

  @Column("varchar", { name: "address", nullable: true, length: 255 })
  address: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("varchar", { name: "telephone", nullable: true, length: 255 })
  telephone: string | null;

  @Column("varchar", { name: "etc", nullable: true, length: 255 })
  etc: string | null;

  @Column("varchar", { name: "link", nullable: true, length: 255 })
  link: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;
}
