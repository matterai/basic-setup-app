import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterModel {
  @ApiProperty({
    description: 'Users email',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Reason why user is interesting of product',
  })
  @IsNotEmpty()
  reason: string;
}
