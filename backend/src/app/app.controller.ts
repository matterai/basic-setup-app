import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { AppService } from './app.service';
import { RegisterModel } from './models/register.model';

@Controller({
  version: '1',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiBody({ type: RegisterModel })
  @Post()
  register(@Body() dto: RegisterModel) {
    return dto;
  }
}
