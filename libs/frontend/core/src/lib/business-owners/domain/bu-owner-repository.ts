import { BuOwner } from './bu-owner';
import { DataError } from '../../common/domain/data-error';
import { Either } from '../../common/domain/either';

export interface BuOwnerRepository {
  getAll(): Promise<Either<DataError, BuOwner[]>>;
}
