import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("news_categories", { schema: "phone_database" })
export class NewsCategories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "sid", default: () => "'0'" })
  sid: number;

  @Column("int", { name: "stt", default: () => "'0'" })
  stt: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("varchar", { name: "keywords", nullable: true, length: 255 })
  keywords: string | null;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("int", { name: "created", default: () => "'0'" })
  created: number;

  @Column("int", { name: "modify", default: () => "'0'" })
  modify: number;

  @Column("int", { name: "status", default: () => "'1'" })
  status: number;

  @Column("int", { name: "gprs", default: () => "'0'" })
  gprs: number;
}
