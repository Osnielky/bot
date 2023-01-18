import { Controller, Body, Get, Post ,RawBodyRequest, Req} from '@nestjs/common';
import { IncomeAlertService } from './income_alert.service';
import { IncomeAlertDto } from './dto/income-alert.dto';
import { stringify } from 'querystring';
import { Request } from 'express';



@Controller('income-alert')
export class IncomeAlertController {
  constructor(private incomeAlertService: IncomeAlertService) {}

  @Post()
  PostM(@Body() body: any) {
   //  this.incomeAlertService.create(body.exchange,body.ticker, parseInt(body.volume), body.time, body.close, body.open, body.high , body.low, body.plot_0);
   console.log( body );
   
  }

  @Get()
  getMessage() {
    return this.incomeAlertService.postingMessage();
  }
}

