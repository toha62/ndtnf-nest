import { Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { AuthGuard } from "@nestjs/passport";
// import { JwtAuthGuard } from "./auth/jwt.auth.guard";

@Controller('api/users')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/token')
  getToken(): string {
    return this.authService.createToken({ id: 2 });
  }

  @Post('signup')
  register() {
    console.log('registration user');
  }

  // @UseGuards(AuthGuard('local'))
  @Post('/signin')
  async login(@Request() req) {
    return req.user;
  }
}
