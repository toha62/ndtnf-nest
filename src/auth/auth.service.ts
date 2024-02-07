import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(id: string): Promise<any> {
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
