import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type MerchantDocument=Merchant & Document;

@Schema({ timestamps: true })
export class Merchant extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true, lowercase: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  identificationType: string;

  @Prop({ required: true })
  identificationNumber: string;

  @Prop({ required: true })
  storeName: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  BIN: string;

  @Prop({ required: true })
  callback: string;

  @Prop({ required: true })
  identificationImage: string;

  @Prop({ required: true })
  merchantImage: string;

  @Prop({ required: true })
  logoImage: string;
}

export const MerchantSchema = SchemaFactory.createForClass(Merchant);
