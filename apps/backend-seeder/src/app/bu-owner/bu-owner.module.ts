import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { infrastructure } from '@delia/backend/bu-owner';
import { BuOwnerCreatorInjectable } from './bu-owner.application.proxy';
import { BuOwnerRepositoryInjectable } from './bu-owner.repository.proxy';

const { BuOwnerEntity } = infrastructure;

@Module({
  imports: [TypeOrmModule.forFeature([BuOwnerEntity])],
  providers: [BuOwnerCreatorInjectable, BuOwnerRepositoryInjectable],
  exports: [BuOwnerCreatorInjectable],
})
export class BuOwnerModule {}
