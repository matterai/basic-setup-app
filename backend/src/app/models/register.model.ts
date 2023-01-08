import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterModel {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  reason: string;
}
