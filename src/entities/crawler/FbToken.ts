import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fb_token", { schema: "crawler" })
export class FbToken {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "token", nullable: true, length: 255 })
  token: string | null;

  @Column("smallint", {
    name: "status",
    nullable: true,
    unsigned: true,
    default: () => "'5'",
  })
  status: number | null;

  @Column("int", { name: "created_by", nullable: true })
  createdBy: number | null;

  @Column("int", { name: "created_at", nullable: true })
  createdAt: number | null;

  @Column("int", { name: "updated_at", nullable: true })
  updatedAt: number | null;
}
