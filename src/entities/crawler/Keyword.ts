import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("keyword", { schema: "crawler" })
export class Keyword {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "keyword", nullable: true, length: 255 })
  keyword: string | null;

  @Column("smallint", {
    name: "status",
    nullable: true,
    unsigned: true,
    default: () => "'10'",
  })
  status: number | null;

  @Column("int", { name: "created_by", nullable: true })
  createdBy: number | null;

  @Column("int", { name: "created_at", nullable: true })
  createdAt: number | null;

  @Column("int", { name: "updated_at", nullable: true })
  updatedAt: number | null;

  @Column("smallint", {
    name: "status_group",
    nullable: true,
    unsigned: true,
    default: () => "'10'",
  })
  statusGroup: number | null;

  @Column("smallint", {
    name: "status_page",
    nullable: true,
    unsigned: true,
    default: () => "'10'",
  })
  statusPage: number | null;
}
