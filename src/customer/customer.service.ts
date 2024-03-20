import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer,CustomerDocument } from './schema/customer.schema';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private readonly customerModel: Model<CustomerDocument>,
  ) {}
  create(createCustomerDto: CreateCustomerDto) {
    const createdCustomer = new this.customerModel(createCustomerDto);
    return createdCustomer.save();
  }

  findAll() {
   return this.customerModel.find().exec();
  }

  findOne(id: string) {
    return this.customerModel.findById(id).exec();
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return this.customerModel.findByIdAndUpdate(id,updateCustomerDto);
  }

  remove(id: string) {
    return this.customerModel.findByIdAndDelete(id).exec();
  }
}
