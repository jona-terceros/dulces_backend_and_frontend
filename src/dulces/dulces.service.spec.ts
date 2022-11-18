import { Test, TestingModule } from '@nestjs/testing';
import { DulcesService } from './dulces.service';

describe('DulcesService', () => {
  let service: DulcesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DulcesService],
    }).compile();

    service = module.get<DulcesService>(DulcesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
