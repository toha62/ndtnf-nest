import { IsDefined, IsEmail, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  @IsDefined()
  firstName: string;

  @IsString()
  @IsDefined()
  lastName: string;

  @IsEmail()
  @IsDefined()
  email: string;

  @IsString()
  @IsDefined()
  password: string;
}
