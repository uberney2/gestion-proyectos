import { Injectable } from '@nestjs/common';
import { BuOwnerCreator } from '@delia/backend/bu-owner';
import { BuOwnerRepositoryInjectable } from './bu-owner.repository.proxy';

@Injectable()
export class BuOwnerCreatorInjectable extends BuOwnerCreator {
  constructor(repository: BuOwnerRepositoryInjectable) {
    super(repository);
  }
}
