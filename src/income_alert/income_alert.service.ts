import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IncomeAlert } from './income-alert.entity';

@Injectable()
export class IncomeAlertService {
  constructor(
    @InjectRepository(IncomeAlert)
    private repo: Repository<IncomeAlert>,
  ) {}

  postingMessage(): string {
    return 'Printing from income alert service';
  }

  create(exchange: string,ticker: string,volume: number, time: string, close: number, open: number, high:number , low: number, rsi: number ) {
    const rsiAlert = this.repo.create({ exchange,ticker,volume,time,close,open,high,low, rsi });
    return this.repo.save(rsiAlert);
  }
}
