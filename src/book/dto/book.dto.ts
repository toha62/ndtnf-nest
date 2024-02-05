import { IsBoolean, IsDefined, IsOptional, IsString } from 'class-validator';

export class BookDto {
  @IsString()
  @IsDefined()
  title: string;

  @IsString()
  @IsDefined()
  authors: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsBoolean()
  @IsOptional()
  favorite: boolean;

  @IsString()
  @IsOptional()
  fileCover: string;

  @IsString()
  @IsOptional()
  fileName: string;

  @IsString()
  @IsOptional()
  fileBook: string;
}
