import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockEntity } from './entities/stock.entity';
import { StockDataEntity } from './entities/stock-data.entity';
import { StockService } from './stock.service';
import { StockResolver } from './stock.resolver'; // or controller

@Module({
  imports: [TypeOrmModule.forFeature([StockEntity, StockDataEntity])],
  providers: [StockService, StockResolver], // or controllers: []
  exports: [StockService],
})
export class StockModule {}
