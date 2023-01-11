import { Injectable } from '@nestjs/common';

@Injectable()
export class IncomeAlertService {
  postingMessage(): string {
    return 'Hello World!1111';
  }
}
