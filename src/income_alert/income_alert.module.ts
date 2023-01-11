import { Module } from '@nestjs/common';
import { IncomeAlertController } from './income_alert.controller';
import { IncomeAlertService } from './income_alert.service';



@Module({
  controllers: [IncomeAlertController],
  providers: [IncomeAlertService]
})


export class IncomeAlertModule {}
