import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("fb_page", { schema: "crawler" })
export class FbPage {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "page_type", nullable: true })
  pageType: number | null;

  @Column("varchar", { name: "page_id", nullable: true, length: 255 })
  pageId: string | null;

  @Column("varchar", { name: "page_name", nullable: true, length: 255 })
  pageName: string | null;

  @Column("int", { name: "created_by", nullable: true })
  createdBy: number | null;

  @Column("int", { name: "created_at", nullable: true })
  createdAt: number | null;

  @Column("int", { name: "updated_at", nullable: true })
  updatedAt: number | null;

  @Column("int", { name: "status_code", nullable: true })
  statusCode: number | null;

  @Column("varchar", { name: "branch", nullable: true, length: 255 })
  branch: string | null;

  @Column("varchar", { name: "sub_branch", nullable: true, length: 255 })
  subBranch: string | null;

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

  @Column("int", { name: "page_like", nullable: true })
  pageLike: number | null;

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

  @Column("int", { name: "follow", nullable: true, default: () => "'0'" })
  follow: number | null;
}
