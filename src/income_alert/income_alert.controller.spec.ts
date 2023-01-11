import { Test, TestingModule } from '@nestjs/testing';
import { IncomeAlertController } from './income_alert.controller';

describe('IncomeAlertController', () => {
  let controller: IncomeAlertController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncomeAlertController],
    }).compile();

    controller = module.get<IncomeAlertController>(IncomeAlertController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
