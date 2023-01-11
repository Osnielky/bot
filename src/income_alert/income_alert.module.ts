import { Module } from '@nestjs/common';
import { IncomeAlertController } from './income_alert.controller';
import { IncomeAlertService } from './income_alert.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomeAlert } from './income-alert.entity';


@Module({

  imports :[TypeOrmModule.forFeature([IncomeAlert])],
  controllers: [IncomeAlertController],
  providers: [IncomeAlertService]
})

export class IncomeAlertModule {}
