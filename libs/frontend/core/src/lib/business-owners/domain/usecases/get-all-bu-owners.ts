import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { BuOwner } from '../bu-owner';
import { BuOwnerRepository } from '../bu-owner-repository';

export class GetAllBuOwnersUseCase {
  private buOwnersRepository;
  constructor(buOwnersRepository: BuOwnerRepository) {
    this.buOwnersRepository = buOwnersRepository;
  }

  execute(): Promise<Either<DataError, BuOwner[]>> {
    return this.buOwnersRepository.getAll();
  }
}
