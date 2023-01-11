import { Test, TestingModule } from '@nestjs/testing';
import { IncomeAlertService } from './income_alert.service';

describe('IncomeAlertService', () => {
  let service: IncomeAlertService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncomeAlertService],
    }).compile();

    service = module.get<IncomeAlertService>(IncomeAlertService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
