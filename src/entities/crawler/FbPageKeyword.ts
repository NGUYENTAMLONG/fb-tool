import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["id"], { unique: true })
@Index("id_2", ["id"], {})
@Index("page_id", ["pageId"], { unique: true })
@Entity("fb_page_keyword", { schema: "crawler" })
export class FbPageKeyword {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "page_type", nullable: true })
  pageType: number | null;

  @Column("varchar", {
    name: "page_id",
    nullable: true,
    unique: true,
    length: 255,
  })
  pageId: string | null;

  @Column("varchar", { name: "page_name", nullable: true, length: 255 })
  pageName: string | null;

  @Column("varchar", {
    name: "verification_status",
    nullable: true,
    length: 255,
  })
  verificationStatus: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 255 })
  phone: string | null;

  @Column("varchar", { name: "birthday", nullable: true, length: 255 })
  birthday: string | null;

  @Column("varchar", { name: "checkins", nullable: true, length: 255 })
  checkins: string | null;

  @Column("varchar", { name: "founded", nullable: true, length: 255 })
  founded: string | null;

  @Column("varchar", {
    name: "talking_about_count",
    nullable: true,
    length: 255,
  })
  talkingAboutCount: string | null;

  @Column("varchar", { name: "website", nullable: true, length: 255 })
  website: string | null;

  @Column("varchar", { name: "were_here_count", nullable: true, length: 255 })
  wereHereCount: string | null;

  @Column("int", { name: "created_by", nullable: true })
  createdBy: number | null;

  @Column("int", { name: "created_at", nullable: true })
  createdAt: number | null;

  @Column("int", { name: "updated_at", nullable: true })
  updatedAt: number | null;

  @Column("int", { name: "status_code", nullable: true })
  statusCode: number | null;

  @Column("varchar", { name: "keyword", nullable: true, length: 255 })
  keyword: string | null;

  @Column("varchar", { name: "page_category", nullable: true, length: 255 })
  pageCategory: string | null;

  @Column("text", { name: "page_about", nullable: true })
  pageAbout: string | null;

  @Column("text", { name: "page_description", nullable: true })
  pageDescription: string | null;

  @Column("varchar", { name: "page_city", nullable: true, length: 255 })
  pageCity: string | null;

  @Column("text", { name: "page_country", nullable: true })
  pageCountry: string | null;

  @Column("varchar", { name: "page_like", nullable: true, length: 250 })
  pageLike: string | null;

  @Column("varchar", { name: "group_page", nullable: true, length: 255 })
  groupPage: string | null;

  @Column("smallint", {
    name: "status",
    nullable: true,
    unsigned: true,
    default: () => "'10'",
  })
  status: number | null;

  @Column("int", { name: "point", nullable: true, default: () => "'0'" })
  point: number | null;

  @Column("int", { name: "status_check", nullable: true, default: () => "'0'" })
  statusCheck: number | null;

  @Column("varchar", {
    name: "follow",
    nullable: true,
    length: 250,
    default: () => "'0'",
  })
  follow: string | null;

  @Column("text", { name: "branch", nullable: true })
  branch: string | null;
}
