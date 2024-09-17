import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('fb_ads_id', ['fbPostId'], { unique: true })
@Index('fb_page_id', ['fbPageId'], {})
@Index('id', ['id'], { unique: true })
@Entity('facebook_post_run', { schema: 'crawler' })
export class FacebookPostRun {
  // @PrimaryGeneratedColumn({ type: "int", name: "id", unique: true })
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'type', length: 255 })
  type: string;

  @Column('varchar', { name: 'fb_page_id', length: 120 })
  fbPageId: string;

  @Column('varchar', { name: 'fb_post_id', length: 120 })
  fbPostId: string;

  @Column('text', { name: 'page_name', nullable: true })
  pageName: string | null;

  @Column('text', { name: 'message', nullable: true })
  message: string | null;

  @Column('text', { name: 'branch', nullable: true })
  branch: string | null;

  @Column('text', { name: 'keyword', nullable: true })
  keyword: string | null;

  @Column('int', {
    name: 'status',
    nullable: true,
    comment: 'liên quan tới phân quyền hoặc gì đó ở đầu người dùng',
    default: () => "'1'",
  })
  status: number | null;

  @Column('int', {
    name: 'status_update_content',
    comment: '=0 : cần quét content, =1: đã quét và update content',
    default: () => "'0'",
  })
  statusUpdateContent: number;

  @Column('int', {
    name: 'status_spy',
    comment:
      '=0: không theo dõi, =1: đưa vào danh sách theo dõi (10 phút tự động load lại các thay đổi 1 lần)',
    default: () => "'0'",
  })
  statusSpy: number;

  @Column('int', { name: 'owner', nullable: true })
  owner: number | null;

  @Column('date', { name: 'created_ads' })
  createdAds: string;

  @Column('timestamp', {
    name: 'created_at',
    default: () => "'0000-00-00 00:00:00'",
  })
  createdAt: Date;

  @Column('timestamp', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
