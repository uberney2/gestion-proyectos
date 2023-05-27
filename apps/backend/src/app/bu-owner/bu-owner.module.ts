import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { infrastructure } from '@delia/backend/bu-owner';
import { BuOwnerController } from './bu-owner.controller';
import { BuOwnerFinderAllInjectable } from './bu-owner.application.proxy';
import { BuOwnerRepository } from './bu-owner.repository.proxy';

const { BuOwnerEntity } = infrastructure;

@Module({
  imports: [TypeOrmModule.forFeature([BuOwnerEntity])],
  controllers: [BuOwnerController],
  providers: [BuOwnerFinderAllInjectable, BuOwnerRepository],
})
export class BuOwnerModule {}
