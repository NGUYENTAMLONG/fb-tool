import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("group_id", ["groupId"], { unique: true })
@Entity("fb_group", { schema: "crawler" })
export class FbGroup {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 1000 })
  name: string;

  @Column("varchar", { name: "privacy", length: 250 })
  privacy: string;

  @Column("int", { name: "bookmark_order" })
  bookmarkOrder: number;

  @Column("int", { name: "version" })
  version: number;

  @Column("int", { name: "unread" })
  unread: number;

  @Column("varchar", { name: "group_id", unique: true, length: 250 })
  groupId: string;

  @Column("varchar", { name: "raw_data", length: 1000 })
  rawData: string;
}
