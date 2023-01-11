import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IncomeAlertModule } from './income_alert/income_alert.module';

@Module({
  imports: [IncomeAlertModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
