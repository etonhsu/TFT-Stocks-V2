import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockModule } from './services/stock/stock.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your_db_user',
      password: 'your_password',
      database: 'tftstocks',
      autoLoadEntities: true,
      synchronize: true, // 🚨 disable in prod
    }),
    StockModule,
  ],
})
export class AppModule {}
