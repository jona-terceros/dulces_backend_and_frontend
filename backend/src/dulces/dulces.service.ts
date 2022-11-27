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

  findOne(_id: number) {
    return this.dulceRepository.findBy({ _id });
  }

  update(_id: number, updateDulceDto: UpdateDulceDto) {
    return this.dulceRepository.update({ _id }, { ...updateDulceDto });
  }

  delete(_id: number) {
    //return `This action removes a #${id} dog`;
    return this.dulceRepository.delete({ _id });
  }
}
