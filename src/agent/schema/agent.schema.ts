import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type AentDocument = Agent & Document;

@Schema({ timestamps: true })
export class Agent extends Document {
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

  @Prop({ enum: ['male', 'female', 'other'], required: true })
  gender: string;

  @Prop({ required: true })
  occupation: string;

  @Prop({ required: true })
  pin: string;

  @Prop({ required: true })
  agentimage: string;
}

export const AgentSchema = SchemaFactory.createForClass(Agent);
