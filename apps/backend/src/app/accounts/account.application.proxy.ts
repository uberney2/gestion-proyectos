import { Injectable } from '@nestjs/common';
import {
  AccountCreator,
  AccountFinderAll,
  AccountFinderByParam,
  AccountUpdater,
} from '@delia/backend/accounts';

import {
  AccountKeyPeopleRemover,
  AccountKeyPeopleUpdaterImportance,
} from '@delia/backend/accounts-key-people';
import { AccountRepository } from './account.repository.proxy';
import {
  KeyPeopleGetterByAccount,
  AccountKeyPeopleCreator,
} from '@delia/backend/accounts-key-people';
import { AccountKeyPeopleRepository } from './account-keypeople.repository.proxy';
import { KeyPeopleRepository } from '../key-people/keypeople.repository.proxy';

@Injectable()
export class AccountCreatorInjectable extends AccountCreator {
  constructor(accountRepository: AccountRepository) {
    super(accountRepository);
  }
}

@Injectable()
export class AccountFinderAllInjectable extends AccountFinderAll {
  constructor(accountRepository: AccountRepository) {
    super(accountRepository);
  }
}

@Injectable()
export class AccountFinderByParamInjectable extends AccountFinderByParam {
  constructor(accountRepository: AccountRepository) {
    super(accountRepository);
  }
}

@Injectable()
export class AccountKeyPeopleRemoverInjectable extends AccountKeyPeopleRemover {
  constructor(
    accountKeyPeopleRepository: AccountKeyPeopleRepository,
    accountRepository: AccountRepository,
    keyPeopleRepository: KeyPeopleRepository
  ) {
    super(accountKeyPeopleRepository, accountRepository, keyPeopleRepository);
  }
}

@Injectable()
export class AccountUpdaterInjectable extends AccountUpdater {
  constructor(accountRepository: AccountRepository) {
    super(accountRepository);
  }
}

@Injectable()
export class KeyPeopleGetterByAccountInjectable extends KeyPeopleGetterByAccount {
  constructor(
    accountKeyPeopleRepository: AccountKeyPeopleRepository,
    accountRepository: AccountRepository,
    keyPeopleRepository: KeyPeopleRepository
  ) {
    super(accountKeyPeopleRepository, accountRepository, keyPeopleRepository);
  }
}

@Injectable()
export class AccountKeyPeopleUpdaterImportanceInjectable extends AccountKeyPeopleUpdaterImportance {
  constructor(accountKeyPeopleRepository: AccountKeyPeopleRepository) {
    super(accountKeyPeopleRepository);
  }
}

@Injectable()
export class AccountKeyPeopleCreatorInjectable extends AccountKeyPeopleCreator {
  constructor(
    accountKeyPeopleRepository: AccountKeyPeopleRepository,
    accountRepository: AccountRepository,
    keyPeopleRepository: KeyPeopleRepository
  ) {
    super(accountKeyPeopleRepository, accountRepository, keyPeopleRepository);
  }
}
