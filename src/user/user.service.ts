import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<UserDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  createUser(newUserData: UserDto): Promise<UserDocument> {
    const user = new this.UserModel(newUserData);

    return user.save();
  }

  findOne(id: string): Promise<any> {
    const user = this.UserModel.findById(id).exec();
    if (user) {
      return user;
    }
    return null;
  }

  // createToken(payload: any) {
  //   return this.jwtService.sign(payload);
  // }
}
