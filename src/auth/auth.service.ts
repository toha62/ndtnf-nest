import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService as UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(id: number): Promise<any> {
    const user = await this.usersService.findOne(id);
    if (user) {
      return user;
    }
    return null;
  }

  createToken(payload: any) {
    return this.jwtService.sign(payload);
  }
}
