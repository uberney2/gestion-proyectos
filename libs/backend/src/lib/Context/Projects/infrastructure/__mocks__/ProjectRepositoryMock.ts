import { jest } from '@jest/globals';
import { Uuid } from '../../../Shared/domain/value-object/Uuid';
import { ValueObject } from '../../../Shared/domain/value-object/ValueObject';
import { Project, ProjectRepository } from '../../domain';

export class ProjectRepositoryMock implements ProjectRepository {
  private insertMock: jest.Mock<typeof this.insert>;
  private updateMock: jest.Mock<typeof this.update>;
  private findByParamMock: jest.Mock<typeof this.findByParam>;
  private findAllMock: jest.Mock<typeof this.findAll>;
  private findAllWithDimensionsMock: jest.Mock<
    typeof this.findAllWithDimensions
  >;
  private findAllProjectsByAccountIdMock: jest.Mock<
    typeof this.findAllProjectsByAccountId
  >;

  constructor() {
    this.insertMock = jest.fn(async (entity: Project) =>
      Promise.resolve(entity)
    );
  }

  insert(entity: Project): Promise<Project> {
    return this.insertMock(entity);
  }

  update(entity: Project) {
    return this.updateMock(entity);
  }

  async findById(): Promise<any> {
    return Promise.resolve(true);
  }

  async findAll(): Promise<Project[]> {
    return this.findAllMock();
  }

  findByParam(param: Uuid | ValueObject<string>): Promise<Project> {
    return this.findByParamMock(param);
  }

  async findAllWithDimensions(): Promise<Project[]> {
    return this.findAllWithDimensionsMock();
  }

  async findAllProjectsByAccountId(): Promise<Project[]> {
    return this.findAllProjectsByAccountIdMock();
  }
}
