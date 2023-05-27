import {
  KeyPeopleCreatorInjectable,
  KeyPeopleFinderInjectable,
  KeyPeopleRemoverInjectable,
} from './keypeople.application.proxy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { KeyPeopleController } from './keypeople.controller';
import { KeyPeopleRepository } from './keypeople.repository.proxy';
import { infrastructure } from '@delia/backend/key-people';

const { KeyPeopleEntity } = infrastructure;

@Module({
  imports: [TypeOrmModule.forFeature([KeyPeopleEntity])],
  controllers: [KeyPeopleController],
  providers: [
    KeyPeopleRepository,
    KeyPeopleCreatorInjectable,
    KeyPeopleFinderInjectable,
    KeyPeopleRemoverInjectable,
  ],
  exports: [KeyPeopleRepository],
})
export class KeyPeopleModule {}
