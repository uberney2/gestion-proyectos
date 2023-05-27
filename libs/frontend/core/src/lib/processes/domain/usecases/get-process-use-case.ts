import { DataError } from '../../../common/domain/data-error';
import { Either } from '../../../common/domain/either';
import { Process } from '../process';
import { ProcessRepository } from '../process-repository';

export class FindOneProcessUseCase {
  private processRepository;
  constructor(processRepository: ProcessRepository) {
    this.processRepository = processRepository;
  }

  execute(param: string): Promise<Either<DataError, Process>> {
    return this.processRepository.findOne(param);
  }
}
