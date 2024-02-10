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

  async findByEmail(email: string): Promise<any> {
    const user = await this.UserModel.findOne({ email }).select('-__v').exec();
    console.log(`finding user by email: ${email} is ${user}`);
    if (user) {
      return user;
    }
    return null;
  }

  async findById(id: string): Promise<any> {
    const user = await this.UserModel.findById(id).select('-__v').exec();
    console.log(`finding user by Id: ${id} is ${user}`);
    if (user) {
      return user;
    }
    return null;
  }

  getAllUsers(): Promise<UserDocument[]> {
    return this.UserModel.find().select('-__v').exec();
  }
}
