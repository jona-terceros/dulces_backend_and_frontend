import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
  Res,
} from '@nestjs/common';
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
    @Res() res,
    @Body() updateDulceDto: UpdateDulceDto,
    @Query('id') id,
  ) {
    await this.dulcesService.update(id, updateDulceDto);
  }
  @Delete('/delete')
  async remove(@Res() res, @Query('id') id) {
    await this.dulcesService.delete(id);
  }
}
