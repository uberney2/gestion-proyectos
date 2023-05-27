import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthJwtGetter } from './auth.application.proxy';

@ApiTags('Auth')
@Controller('v1')
export class AuthController {
  constructor(private readonly authJwtGetter: AuthJwtGetter) {}

  @Get('/authentication')
  public async getToken(@Query('auth-code') authCode: string) {
    const token = this.authJwtGetter.run(authCode);
    return token;
  }
}
