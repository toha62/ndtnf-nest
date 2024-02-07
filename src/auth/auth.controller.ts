import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
// import { AuthGuard } from "@nestjs/passport";
// import { JwtAuthGuard } from "./auth/jwt.auth.guard";

@Controller('api/users')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Get('/token')
  getToken(): string {
    return this.authService.createToken({ id: 2 });
  }

  @Post('signup')
  registerUser(@Body() newUserData: UserDto) {
    console.log('registration user');
    this.userService.createUser(newUserData);
  }

  // @UseGuards(AuthGuard('local'))
  // @Post('/signin')
  // async login(@Request() req) {
  //   return req.user;
  // }
}
