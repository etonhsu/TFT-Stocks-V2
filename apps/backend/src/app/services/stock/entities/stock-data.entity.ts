import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { StockEntity } from './stock.entity';

@Entity('stock_data')
export class StockDataEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'league_points' })
  leaguePoints!: number;

  @Column({ type: 'timestamptz' })
  @Index()
  timestamp!: string;

  @ManyToOne(() => StockEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'stock_id' })
  stock!: StockEntity;

  @Column({ name: 'stock_id' })
  @Index()
  stockId!: number;
}
