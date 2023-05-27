import { Injectable } from '@nestjs/common';
import { BuOwnerFinderAll } from '@delia/backend/bu-owner';
import { BuOwnerRepository } from './bu-owner.repository.proxy';

@Injectable()
export class BuOwnerFinderAllInjectable extends BuOwnerFinderAll {
  constructor(buOwnerRepository: BuOwnerRepository) {
    super(buOwnerRepository);
  }
}
