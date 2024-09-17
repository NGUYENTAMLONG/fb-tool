import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_group_id", ["groupId"], {})
@Index("index_user_id", ["userId"], {})
@Index("user_duplicate", ["userDuplicate"], { unique: true })
@Entity("member_group", { schema: "crawler" })
export class MemberGroup {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "user_id", length: 50 })
  userId: string;

  @Column("text", { name: "user_name" })
  userName: string;

  @Column("text", { name: "phone" })
  phone: string;

  @Column("varchar", { name: "user_duplicate", unique: true, length: 100 })
  userDuplicate: string;

  @Column("varchar", { name: "group_id", length: 100 })
  groupId: string;

  @Column("timestamp", {
    name: "created_time",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdTime: Date;
}
