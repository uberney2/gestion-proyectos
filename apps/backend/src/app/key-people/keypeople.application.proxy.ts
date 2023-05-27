import { Injectable } from '@nestjs/common';
import {
  KeyPeopleCreator,
  KeyPeopleFinder,
  KeyPeopleRemover,
} from '@delia/backend/key-people';
import { KeyPeopleRepository } from './keypeople.repository.proxy';

@Injectable()
export class KeyPeopleCreatorInjectable extends KeyPeopleCreator {
  constructor(repository: KeyPeopleRepository) {
    super(repository);
  }
}

@Injectable()
export class KeyPeopleFinderInjectable extends KeyPeopleFinder {
  constructor(repository: KeyPeopleRepository) {
    super(repository);
  }
}

@Injectable()
export class KeyPeopleRemoverInjectable extends KeyPeopleRemover {
  constructor(repository: KeyPeopleRepository) {
    super(repository);
  }
}
