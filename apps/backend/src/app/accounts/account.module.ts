import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountController } from './account.controller';

import { infrastructure as keyPeopleInfrastructure } from '@delia/backend/key-people';
import { infrastructure as accountInfrastructure } from '@delia/backend/accounts';
import { infrastructure as accountKeyPeopleInfrastructure } from '@delia/backend/accounts-key-people';
import {
  AccountCreatorInjectable,
  AccountFinderAllInjectable,
  AccountFinderByParamInjectable,
  AccountKeyPeopleCreatorInjectable,
  AccountKeyPeopleRemoverInjectable,
  AccountKeyPeopleUpdaterImportanceInjectable,
  AccountUpdaterInjectable,
  KeyPeopleGetterByAccountInjectable,
} from './account.application.proxy';
import { AccountRepository } from './account.repository.proxy';
import { AccountKeyPeopleRepository } from './account-keypeople.repository.proxy';
import { KeyPeopleModule } from '../key-people/keypeople.module';

const { KeyPeopleEntity } = keyPeopleInfrastructure;
const { AccountEntity } = accountInfrastructure;
const { AccountKeyPeopleEntity } = accountKeyPeopleInfrastructure;

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AccountEntity,
      AccountKeyPeopleEntity,
      KeyPeopleEntity,
    ]),
    KeyPeopleModule,
  ],
  controllers: [AccountController],
  providers: [
    AccountCreatorInjectable,
    AccountFinderAllInjectable,
    AccountFinderByParamInjectable,
    AccountKeyPeopleRemoverInjectable,
    AccountRepository,
    AccountKeyPeopleRepository,
    AccountUpdaterInjectable,
    KeyPeopleGetterByAccountInjectable,
    AccountKeyPeopleUpdaterImportanceInjectable,
    AccountKeyPeopleCreatorInjectable,
  ],
})
export class AccountsModule {}
