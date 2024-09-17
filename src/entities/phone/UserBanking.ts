import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bankingname", ["bankingname", "bankingcode"], {})
@Index("uid", ["uid"], {})
@Entity("user_banking", { schema: "phone_database" })
export class UserBanking {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "uid" })
  uid: number;

  @Column("varchar", { name: "banking", length: 100 })
  banking: string;

  @Column("varchar", { name: "bankingname", length: 100 })
  bankingname: string;

  @Column("varchar", { name: "bankingcode", length: 100 })
  bankingcode: string;

  @Column("int", { name: "status", default: () => "'1'" })
  status: number;
}
