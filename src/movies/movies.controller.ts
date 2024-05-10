import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { FindAllParameters, MoviesDto } from './movies.dto';
import { MoviesService } from './movies.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() movies: MoviesDto) {
    this.moviesService.create(movies);
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.moviesService.findById(id);
  }

  @Get()
  findAll(@Query() params: FindAllParameters): MoviesDto[] {
    return this.moviesService.findAll(params);
  }

  @Put()
  update(@Body() movies: MoviesDto) {
    this.moviesService.update(movies);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }
}
