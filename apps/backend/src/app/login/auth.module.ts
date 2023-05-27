import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository.proxy';
import { AuthJwtGetter } from './auth.application.proxy';
import { infrastructure } from '@delia/backend/shared';

const { EnvironmentConfigModule } = infrastructure;
@Module({
  imports: [HttpModule, EnvironmentConfigModule],
  controllers: [AuthController],
  providers: [AuthRepository, AuthJwtGetter],
})
export class AuthModule {}
