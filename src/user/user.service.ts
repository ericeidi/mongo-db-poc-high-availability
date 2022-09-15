import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './model/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto): Promise<User[]> {
    const createdUsers = this.userModel.insertMany(createUserDto);
    return createdUsers;
    // const createdUser = new this.userModel(createUserDto);
    // return createdUser.db.i
  }

  async findAll(): Promise<User[]> {
    const user = await this.userModel.find().exec();
    console.log('~ user', user);
    return user;
  }
}
