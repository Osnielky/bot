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
    return 'Hello World!1111';
  }

  create(name: string) {
    const user = this.repo.create({ name });
    return this.repo.save(user);
  }
}
