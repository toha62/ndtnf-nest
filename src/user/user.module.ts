import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserSchema, User } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  // controllers: [BookController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
