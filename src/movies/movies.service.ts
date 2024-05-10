import { Injectable, NotFoundException } from '@nestjs/common';
import { FindAllParameters, MoviesDto } from './movies.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class MoviesService {
  private movies: MoviesDto[] = [];

  create(movies: MoviesDto) {
    movies.id = uuid();
    this.movies.push(movies);
  }

  findById(id: string): MoviesDto {
    const findMovie = this.movies.filter((m) => m.id === id);

    if (findMovie.length) {
      return findMovie[0];
    }
    throw new NotFoundException(`Movie with id ${id} not found!`);
  }

  findAll(params: FindAllParameters): MoviesDto[] {
    return this.movies.filter((m) => {
      let match = true;

      if (params.title != undefined && !m.title.includes(params.title)) {
        match = false;
      }

      if (
        params.releaseDate != undefined &&
        m.releaseDate !== params.releaseDate
      ) {
        match = false;
      }

      if (params.gender != undefined && !m.gender.includes(params.gender)) {
        match = false;
      }

      if (
        params.directorName != undefined &&
        !m.directorName.includes(params.directorName)
      ) {
        match = false;
      }

      if (
        params.language != undefined &&
        !m.language.includes(params.language)
      ) {
        match = false;
      }

      return match;
    });
  }

  update(movies: MoviesDto) {
    const movieIndex = this.movies.findIndex((m) => m.id === movies.id);

    if (movieIndex >= 0) {
      this.movies[movieIndex] = movies;
      return;
    }
    throw new NotFoundException(`Movie with id ${movies.id} not found!`);
  }

  remove(id: string) {
    const movieIndex = this.movies.findIndex((m) => m.id === id);

    if (movieIndex >= 0) {
      this.movies.splice(movieIndex, 1);
      return;
    }
    throw new NotFoundException(`Movie with id ${id} not found!`);
  }
}
