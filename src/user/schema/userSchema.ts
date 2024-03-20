import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;
@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, maxlength: 200 })
  userName: string;

  @Prop({
    type: String,
    enum: ['admin', 'customer', 'agent', 'merchant'],
    required: true,
  })
  type: string;
  @Prop({
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  })
  gender: string;

  @Prop({ type: Number, required: [true, 'Contact is required'] })
  mobileNumber: number;

  @Prop({ required: true, unique: true, lowercase: true })
  email: string;

  @Prop({ type: String, required: [true, 'Password is required'] })
  password: string;

  @Prop({ type: Boolean, default: false })
  disabled: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
