import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/userSchema';
import { Model} from 'mongoose';
import { Query  } from 'express-serve-static-core';


@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  create(createUserDto: CreateUserDto): Promise<User> {
    const model = new this.userModel();
    model.username = createUserDto.username;
    model.password = createUserDto.password;
    model.email = createUserDto.email;
    return model.save();
  }

  findAll(query:Query): Promise<User[]> {
    console.log(query);
    const resPerPage=2
    const currentPage=Number(query.page) ||1
    const skip=resPerPage * (currentPage-1)

    const keyword= query.keyword ?{
      username:{
        $regex:query.keyword,
        $options:'i'
      }
    }:{}
    const users= this.userModel.find({...keyword}).limit(resPerPage).skip(skip).exec();
    return users;
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel
      .updateOne(
        { _id: id },
        {
          username: updateUserDto.username,
          password: updateUserDto.password,
          email: updateUserDto.email,
        },
      )
      .exec();
  }
  remove(id: string) {
    return this.userModel.deleteOne({ _id: id }).exec();
  }
}
