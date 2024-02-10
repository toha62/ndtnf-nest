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

export class UserPayloadDto {
  id: string;
  email: string;
  firstName: string;
}

export class AuthUserDto {
  @IsEmail()
  @IsDefined()
  email: string;

  @IsString()
  @IsDefined()
  password: string;
}
