import { IsUUID, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateStockDto {
  @IsString()
  puuid!: string;

  @IsUUID()
  leagueId!: string;

  @IsString()
    gameName!: string;

  @IsString()
  tagLine!: string;

  @IsOptional()
  @IsNumber()
  delta8h?: number;

  @IsOptional()
  @IsNumber()
  delta24h?: number;

  @IsOptional()
  @IsNumber()
  delta72h?: number;
}
