import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity('stocks')
export class StockEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  @Index()
  puuid!: string;

  @Column({ name: 'game_name' })
  gameName!: string;

  @Column({ name: 'tag_line' })
  tagLine!: string;

  @Column({ name: 'delta_8h', type: 'decimal', nullable: true })
  delta8h!: number;

  @Column({ name: 'delta_24h', type: 'decimal', nullable: true })
  delta24h!: number;

  @Column({ name: 'delta_72h', type: 'decimal', nullable: true })
  delta72h!: number;
}
