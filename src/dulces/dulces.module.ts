import { Module } from '@nestjs/common';
import { DulcesService } from './dulces.service';
import { DulcesController } from './dulces.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dulce } from './entities/dulce.entity';

@Module({
  controllers: [DulcesController],
  providers: [DulcesService],
  imports: [TypeOrmModule.forFeature([Dulce])],
})
export class DulcesModule {}
