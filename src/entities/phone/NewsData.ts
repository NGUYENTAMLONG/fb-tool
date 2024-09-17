import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("cid", ["cid"], {})
@Index("name", ["name"], {})
@Entity("news_data", { schema: "phone_database" })
export class NewsData {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "cid", default: () => "'0'" })
  cid: number;

  @Column("int", { name: "sid", default: () => "'0'" })
  sid: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("text", { name: "lead", nullable: true })
  lead: string | null;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("varchar", { name: "thumb", nullable: true, length: 255 })
  thumb: string | null;

  @Column("int", { name: "created", default: () => "'0'" })
  created: number;

  @Column("int", { name: "modify", default: () => "'0'" })
  modify: number;

  @Column("varchar", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("varchar", { name: "keywords", nullable: true, length: 255 })
  keywords: string | null;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("int", { name: "view", default: () => "'0'" })
  view: number;

  @Column("int", { name: "status", default: () => "'1'" })
  status: number;
}
