import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Merchant,MerchantDocument} from './schema/merchant.schema';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { UpdateMerchantDto } from './dto/update-merchant.dto';

@Injectable()
export class MerchantService {
  constructor(
    @InjectModel(Merchant.name) private readonly merchantModel: Model<MerchantDocument>,
  ) {}
  create(createMerchantDto: CreateMerchantDto) {
    const createdMerchant = new this.merchantModel(createMerchantDto);
    return createdMerchant.save();
  }

  findAll() {
    return this.merchantModel.find().exec();
  }

  findOne(id: string) {
    return this.merchantModel.findById(id).exec();
  }

  update(id: string, updateMerchantDto: UpdateMerchantDto) {
    return this.merchantModel.findByIdAndUpdate(id,updateMerchantDto).exec();
  }

  remove(id: string) {
    return this.merchantModel.findByIdAndDelete(id);
  }
}
