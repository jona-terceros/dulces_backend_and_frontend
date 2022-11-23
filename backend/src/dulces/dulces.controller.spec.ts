import { Test, TestingModule } from '@nestjs/testing';
import { DulcesController } from './dulces.controller';
import { DulcesService } from './dulces.service';

describe('DulcesController', () => {
  let controller: DulcesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DulcesController],
      providers: [DulcesService],
    }).compile();

    controller = module.get<DulcesController>(DulcesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
