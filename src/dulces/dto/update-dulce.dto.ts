import { PartialType } from '@nestjs/mapped-types';
import { CreateDulceDto } from './create-dulce.dto';

export class UpdateDulceDto extends PartialType(CreateDulceDto) {
  nombre: string;
  marca: string;
  sabor: string;
  cantidad: number;
}
