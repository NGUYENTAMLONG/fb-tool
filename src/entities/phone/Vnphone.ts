import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("phone", ["phone"], {})
@Index("uid", ["uid"], {})
@Entity("vnphone", { schema: "phone_database" })
export class Vnphone {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "phone", length: 100 })
  phone: string;

  @Column("varchar", { name: "uid", length: 100 })
  uid: string;

  @Column("varchar", { name: "email", nullable: true, length: 100 })
  email: string | null;

  @Column("int", {
    name: "sex",
    comment: "0 la nam, 1 la nu",
    default: () => "'0'",
  })
  sex: number;

  @Column("varchar", { name: "location", nullable: true, length: 100 })
  location: string | null;

  @Column("varchar", { name: "live", nullable: true, length: 100 })
  live: string | null;

  @Column("longtext", { name: "about", nullable: true })
  about: string | null;
}
