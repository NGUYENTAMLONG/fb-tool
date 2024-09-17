import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("profile_fb", { schema: "phone_database" })
export class ProfileFb {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "phone", length: 12 })
  phone: string;

  @Column("varchar", { name: "uid", length: 20 })
  uid: string;

  @Column("varchar", { name: "email", length: 50 })
  email: string;

  @Column("varchar", { name: "gender", length: 10 })
  gender: string;

  @Column("varchar", { name: "location", length: 255 })
  location: string;

  @Column("varchar", { name: "hometown", length: 255 })
  hometown: string;

  @Column("varchar", { name: "age", length: 100 })
  age: string;

  @Column("longtext", { name: "interested", nullable: true })
  interested: string | null;

  @Column("longtext", { name: "work", nullable: true })
  work: string | null;

  @Column("longtext", { name: "about", nullable: true })
  about: string | null;
}
