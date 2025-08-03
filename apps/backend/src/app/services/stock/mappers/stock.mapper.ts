import { StockEntity } from '../entities/stock.entity';
import { Stock } from '@tftstocks/shared/types';

export const mapEntityToStock = (entity: StockEntity): Stock => ({
  id: entity.id,
  puuid: entity.puuid,
  gameName: entity.gameName,
  tagLine: entity.tagLine,
  delta8h: entity.delta8h,
  delta24h: entity.delta24h,
  delta72h: entity.delta72h,
});
