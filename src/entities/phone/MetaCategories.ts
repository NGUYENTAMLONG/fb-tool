import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('meta_categories', { schema: 'phone_database' })
export class MetaCategories {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('varchar', { name: 'keywords', length: 255 })
  keywords: string;

  @Column('varchar', { name: 'description', length: 255 })
  description: string;

  @Column('char', { name: 'name', length: 50 })
  name: string;

  @Column('varchar', { name: 'head', length: 255 })
  head: string;

  @Column('int', { name: 'modify', default: () => "'0'" })
  modify: number;
}
