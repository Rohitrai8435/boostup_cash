import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  readonly userName: string;
  readonly type: 'admin' | 'customer' | 'agent' | 'merchant';
  readonly gender: 'male' | 'female' | 'other';
  readonly mobileNumber: number;
  readonly email: string;
  readonly password: string;
  readonly disabled?: boolean;
}
