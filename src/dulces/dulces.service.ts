import { Injectable } from '@nestjs/common';
import { CreateDulceDto } from './dto/create-dulce.dto';
import { UpdateDulceDto } from './dto/update-dulce.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dulce } from './entities/dulce.entity';

@Injectable()
export class DulcesService {
  constructor(
    @InjectRepository(Dulce) private dulceRepository: Repository<Dulce>,
  ) {}
  create(createDulceDto: CreateDulceDto) {
    return this.dulceRepository.save(createDulceDto);
  }

  findAll() {
    return this.dulceRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} dulce`;
  }

  update(id: number, updateDulceDto: UpdateDulceDto) {
    return this.dulceRepository.update({ id }, { ...updateDulceDto });
  }

  delete(id: number) {
    //return `This action removes a #${id} dog`;
    return this.dulceRepository.delete({ id });
  }
}
