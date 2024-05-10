import {
  IsDateString,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class MoviesDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @MinLength(1)
  @MaxLength(512)
  title: string;

  @IsString()
  @MinLength(1)
  description: string;

  @IsDateString()
  releaseDate: Date;

  @IsString()
  @MinLength(1)
  @MaxLength(64)
  gender: string;

  @IsString()
  @MinLength(1)
  @MaxLength(128)
  directorName: string;

  @IsString()
  @MinLength(1)
  @MaxLength(64)
  language: string;
}

export interface FindAllParameters {
  title: string;
  releaseDate: Date;
  gender: string;
  directorName: string;
  language: string;
}
