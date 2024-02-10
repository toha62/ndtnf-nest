import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { UserPayloadDto } from 'src/user/dto/user.dto';
// import { UserDocument } from 'src/user/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, passw: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    console.log(`validate user: ${user}`);
    if (user && user.password === passw) {
      const { firstName, lastName, email, _id } = user;

      return { firstName, lastName, email, id: _id };
    }
    return null;
  }

  async validateUserById(id: string): Promise<any> {
    const user = this.usersService.findById(id);

    if (user) {
      return user;
    }
    return null;
  }

  createToken(payload: UserPayloadDto): string {
    return this.jwtService.sign(payload);
  }
}
