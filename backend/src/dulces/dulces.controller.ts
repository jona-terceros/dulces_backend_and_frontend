import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from "@nestjs/common";
import { DulcesService } from './dulces.service';
import { CreateDulceDto } from './dto/create-dulce.dto';
import { UpdateDulceDto } from './dto/update-dulce.dto';

@Controller('dulces')
export class DulcesController {
  constructor(private readonly dulcesService: DulcesService) {}

  @Post('/create')
  create(@Body() createDulceDto: CreateDulceDto) {
    return this.dulcesService.create(createDulceDto);
  }

  @Get('/')
  findAll() {
    return this.dulcesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.dulcesService.findOne(+id);
  }

  /*@Patch(':id')
  update(@Param('id') id: string, @Body() updateDulceDto: UpdateDulceDto) {
    return this.dulcesService.update(+id, updateDulceDto);
  }*/
  @Put('/update')
  async UpdateDulceDto(
    @Param('id') id: number,
    @Body() updateDulceDto: UpdateDulceDto,
  ) {
    await this.dulcesService.update(id, updateDulceDto);
  }
  @Delete('/delete')
  async remove(@Param('id') id: number) {
    await this.dulcesService.delete(id);
  }
}
