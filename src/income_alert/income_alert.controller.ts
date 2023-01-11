import { Controller, Body, Get, Post } from '@nestjs/common';
import { IncomeAlertService } from './income_alert.service';
import { IncomeAlertDto } from './dto/income-alert.dto';

@Controller('income-alert')
export class IncomeAlertController {
  constructor(private incomeAlertService: IncomeAlertService) {}

  @Post()
  PostM(@Body() body: IncomeAlertDto) {
    return body.name;
  }

  @Get()
  getMessage() {
    return this.incomeAlertService.postingMessage();
  }
  
}
