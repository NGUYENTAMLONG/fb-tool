import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("status", ["status", "response", "type"], {})
@Index("uid", ["uid"], {})
@Entity("trans_req_log", { schema: "phone_database" })
export class TransReqLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "uid" })
  uid: number;

  @Column("varchar", { name: "uname", nullable: true, length: 100 })
  uname: string | null;

  @Column("varchar", {
    name: "uphone",
    nullable: true,
    comment: "Số điện thoại nạp tiền",
    length: 100,
  })
  uphone: string | null;

  @Column("varchar", {
    name: "uemail",
    nullable: true,
    comment: "Email nhận mã thẻ",
    length: 100,
  })
  uemail: string | null;

  @Column("varchar", { name: "transid", nullable: true, length: 100 })
  transid: string | null;

  @Column("varchar", { name: "telco", nullable: true, length: 100 })
  telco: string | null;

  @Column("varchar", { name: "code", nullable: true, length: 100 })
  code: string | null;

  @Column("varchar", { name: "serial", nullable: true, length: 100 })
  serial: string | null;

  @Column("varchar", { name: "bankname", nullable: true, length: 100 })
  bankname: string | null;

  @Column("varchar", { name: "bankcode", nullable: true, length: 100 })
  bankcode: string | null;

  @Column("bigint", { name: "price", comment: "Giá trị", default: () => "'0'" })
  price: string;

  @Column("int", {
    name: "quality",
    comment: "Số lượng thẻ mua",
    default: () => "'0'",
  })
  quality: number;

  @Column("bigint", {
    name: "value",
    comment: "Tổng giá trị giao dịch",
    default: () => "'0'",
  })
  value: string;

  @Column("int", {
    name: "status",
    comment:
      "0 là default, 1 là success, 2 là failed card, 3 là đã nạp tiền nhưng login failed, 4 đã nạp tiền nhưng lỗi chuyển robux",
    default: () => "'0'",
  })
  status: number;

  @Column("int", {
    name: "response",
    comment: "0 default, 1 accept, 2 reject, 3 accept wrong value",
  })
  response: number;

  @Column("timestamp", { name: "created", nullable: true })
  created: Date | null;

  @Column("timestamp", { name: "updated", nullable: true })
  updated: Date | null;

  @Column("int", { name: "order", default: () => "'0'" })
  order: number;

  @Column("int", {
    name: "type",
    comment:
      "0 là nạp tiền điện thoại, 1 là mua thẻ, 2 là nạp tiền, 3 là rút tiền",
    default: () => "'0'",
  })
  type: number;

  @Column("int", {
    name: "partner",
    comment: "0 là mặc định, 1 là key24h",
    default: () => "'0'",
  })
  partner: number;
}
