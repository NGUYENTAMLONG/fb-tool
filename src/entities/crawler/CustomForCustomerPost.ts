import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_duplicate", ["duplicate"], { unique: true })
@Index("page_id", ["pageId"], {})
@Entity("custom_for_customer_post", { schema: "crawler" })
export class CustomForCustomerPost {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "post_id", nullable: true, length: 255 })
  postId: string | null;

  @Column("varchar", { name: "page_id", nullable: true, length: 255 })
  pageId: string | null;

  @Column("varchar", { name: "page_name", nullable: true, length: 255 })
  pageName: string | null;

  @Column("varchar", { name: "user_id", nullable: true, length: 255 })
  userId: string | null;

  @Column("varchar", { name: "user_name", nullable: true, length: 255 })
  userName: string | null;

  @Column("varchar", { name: "comment_id", nullable: true, length: 255 })
  commentId: string | null;

  @Column("varchar", { name: "phone_convert", nullable: true, length: 255 })
  phoneConvert: string | null;

  @Column("varchar", { name: "phone_comment", nullable: true, length: 255 })
  phoneComment: string | null;

  @Column("varchar", { name: "phone_update", nullable: true, length: 255 })
  phoneUpdate: string | null;

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

  @Column("int", { name: "status_update_page", default: () => "'0'" })
  statusUpdatePage: number;

  @Column("varchar", { name: "crawled_time", nullable: true, length: 255 })
  crawledTime: string | null;

  @Column("varchar", { name: "sp", nullable: true, length: 255 })
  sp: string | null;

  @Column("text", { name: "message", nullable: true })
  message: string | null;

  @Column("varchar", { name: "duplicate", unique: true, length: 255 })
  duplicate: string;

  @Column("int", { name: "crawled_time_stamp", nullable: true })
  crawledTimeStamp: number | null;

  @Column("text", { name: "note", nullable: true })
  note: string | null;
}
