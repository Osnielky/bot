import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IncomeAlertModule } from './income_alert/income_alert.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomeAlert } from './income_alert/income-alert.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'alerts.db',
            entities: [IncomeAlert, ],
            synchronize: true, //development only
          }),
    IncomeAlertModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
