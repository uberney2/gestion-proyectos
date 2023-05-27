import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Delete,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { KeyPeoplePresenter } from './dto/keypeople.presenter';
import {
  KeyPeopleCreatorInjectable,
  KeyPeopleFinderInjectable,
  KeyPeopleRemoverInjectable,
} from './keypeople.application.proxy';

import { CreateKeyPeopleDto } from './dto/create-keypeople.dto';
import { DomainExceptions } from '@delia/backend/key-people';

@ApiTags('KeyPeople')
@Controller('keypeople')
export class KeyPeopleController {
  constructor(
    private keyPeopleCreator: KeyPeopleCreatorInjectable,
    private KeyPeopleFinder: KeyPeopleFinderInjectable,
    private KeyPeopleRemover: KeyPeopleRemoverInjectable
  ) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Key Person was created',
    type: KeyPeoplePresenter,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid property or duplicated entry',
    content: {
      'application/json': {
        example: {
          statusCode: 400,
          message: ['email must be an email'],
          error: 'Bad Request',
        },
      },
    },
  })
  async create(@Body() createKeyPeopleDto: CreateKeyPeopleDto): Promise<void> {
    try {
      await this.keyPeopleCreator.run(createKeyPeopleDto);
    } catch (error) {
      if (error instanceof DomainExceptions.KeyPeopleAlreadyExists) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }

      throw error;
    }
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Key People found',
    content: {
      'application/json': {
        example: [
          {
            id: 'b60b831a-d782-4390-a36b-519af3293510',
            name: 'Nicolas Felipe Jején Martínez',
            role: 'Project owner',
            email: 'Project ownernicolas.jema@perficient.com',
          },
          {
            id: 'b60b831a-d782-4390-a36b-519af3293580',
            name: 'Juan Poveda',
            role: 'director',
            email: 'admin0@perficient.com',
            createdAt: '2022-12-20T23:31:47.709Z',
            updatedAt: '2022-12-20T23:31:47.709Z',
          },
        ],
      },
    },
  })
  async findAll(): Promise<KeyPeoplePresenter[]> {
    const keyPeopleFound = await this.KeyPeopleFinder.run();
    return keyPeopleFound.map((record) => record.toPrimitives());
  }

  @Delete(':id')
  async remove(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string
  ): Promise<void> {
    try {
      await this.KeyPeopleRemover.run(id);
    } catch (error) {
      if (error instanceof DomainExceptions.KeyPeopleNotFound) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }

      throw error;
    }
  }
}
