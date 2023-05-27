import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import {
  AccountCreatorInjectable,
  AccountFinderAllInjectable,
  AccountFinderByParamInjectable,
  AccountKeyPeopleCreatorInjectable,
  AccountKeyPeopleRemoverInjectable,
  AccountUpdaterInjectable,
  KeyPeopleGetterByAccountInjectable,
  AccountKeyPeopleUpdaterImportanceInjectable,
} from './account.application.proxy';
import { ApiTags } from '@nestjs/swagger';
import { ShowAllResponse } from './dto/show-all-accounts-response';
import {
  CreateAccountKeyPeopleDto,
  KeyPeopleExtraFields,
} from './dto/create-account-keypeople.dto';
import {
  AccountWithKeyPeople,
  DomainExceptions,
} from '@delia/backend/accounts';
import { DomainExceptions as AccountKeyPeopleExceptions } from '@delia/backend/accounts-key-people';
import {
  KeyPeopleWithNotes,
  DomainExceptions as KeyPeopleDomainExceptions,
  KeyPeopleWithNotesPrimitiveType,
} from '@delia/backend/key-people';
import {
  UpdateAccountDto,
  UpdateAccountFullDto,
} from './dto/update-account.dto';

@ApiTags('Account')
@Controller('accounts')
export class AccountController {
  constructor(
    private accountCreator: AccountCreatorInjectable,
    private accountFinderAll: AccountFinderAllInjectable,
    private accountKeyPeopleRemover: AccountKeyPeopleRemoverInjectable,
    private accountUpdater: AccountUpdaterInjectable,
    private accountFinderById: AccountFinderByParamInjectable,
    private keyPeopleGetterByAccount: KeyPeopleGetterByAccountInjectable,
    private accountKeyPeopleUpdaterImportance: AccountKeyPeopleUpdaterImportanceInjectable,
    private accountKeyPeopleCreator: AccountKeyPeopleCreatorInjectable
  ) {}

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto): Promise<void> {
    try {
      await this.accountCreator.run(createAccountDto);
    } catch (error) {
      if (error instanceof DomainExceptions.AccountAlreadyExists) {
        throw new HttpException(error.message, HttpStatus.FORBIDDEN);
      }
      throw error;
    }
  }

  @Get()
  async findAll() {
    const response = await this.accountFinderAll.run();
    return this.createShowAccountsResponse(response);
  }

  @Put(':accountId')
  async update(
    @Param('accountId') accountId: string,
    @Body() UpdateAccountDto: UpdateAccountDto
  ) {
    try {
      UpdateAccountDto.id = accountId;
      const fullAccount = this.mapAccountDtoToFullAccountDto(UpdateAccountDto);
      const response = await this.accountUpdater.run(fullAccount);
      return response.toPrimitives();
    } catch (error) {
      if (error instanceof DomainExceptions.AccountNotUpdated) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      throw error;
    }
  }

  @Get(':param')
  async findByParam(@Param('param') param: string) {
    try {
      const account = await this.accountFinderById.run(param);
      return account.toPrimitives();
    } catch (error) {
      if (error instanceof DomainExceptions.AccountNotFound) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }

  @Post(':accountId/keypeople/:keyPeopleId')
  async linkKeyPeople(
    @Param('accountId', new ParseUUIDPipe({ version: '4' })) accountId: string,
    @Param('keyPeopleId', new ParseUUIDPipe({ version: '4' }))
    keyPeopleId: string,
    @Body() requestBody: KeyPeopleExtraFields
  ): Promise<void> {
    try {
      await this.accountKeyPeopleCreator.run({
        id: '',
        accountId: accountId,
        keyPeopleId: keyPeopleId,
        notes: requestBody.notes,
      });
    } catch (error) {
      if (
        error instanceof DomainExceptions.AccountNotFound ||
        error instanceof KeyPeopleDomainExceptions.KeyPeopleNotFound ||
        error instanceof AccountKeyPeopleExceptions.AccountKeyPeopleNotLinked
      ) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }

  @Delete(':accountId/keypeople/:keyPeopleId')
  async unLinkKeyPeople(
    @Param('accountId', new ParseUUIDPipe({ version: '4' })) accountId: string,
    @Param('keyPeopleId', new ParseUUIDPipe({ version: '4' }))
    keyPeopleId: string
  ): Promise<void> {
    try {
      await this.accountKeyPeopleRemover.run(accountId, keyPeopleId);
    } catch (error) {
      if (
        error instanceof DomainExceptions.AccountNotFound ||
        error instanceof KeyPeopleDomainExceptions.KeyPeopleNotFound ||
        error instanceof AccountKeyPeopleExceptions.AccountKeyPeopleNotRemoved
      ) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }

  @Patch(':accountId/keypeople/:keyPeopleId')
  async UpdateImportance(
    @Param('accountId', new ParseUUIDPipe({ version: '4' })) accountId: string,
    @Param('keyPeopleId', new ParseUUIDPipe({ version: '4' }))
    keyPeopleId: string,
    @Body() requestBody: KeyPeopleExtraFields
  ): Promise<void> {
    try {
      await this.accountKeyPeopleUpdaterImportance.run(
        accountId,
        keyPeopleId,
        requestBody.notes
      );
    } catch (error) {
      if (
        error instanceof AccountKeyPeopleExceptions.AccountKeyPeopleNotUpdated
      ) {
        throw new HttpException(
          error.message,
          HttpStatus.INTERNAL_SERVER_ERROR
        );
      }
      throw error;
    }
  }

  @Get(':id/keypeople')
  async getLinkedKeyPeople(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string
  ): Promise<KeyPeopleWithNotesPrimitiveType[]> {
    try {
      const keyPeople = await this.keyPeopleGetterByAccount.run(id);
      return keyPeople.map((keyPerson) => keyPerson.toPrimitives());
    } catch (error) {
      if (error instanceof DomainExceptions.AccountNotFound) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }

  private mapAccountDtoToFullAccountDto(
    accountWithOutId: UpdateAccountDto
  ): UpdateAccountFullDto {
    const fullAccount: UpdateAccountFullDto = {
      id: accountWithOutId.id,
      name: accountWithOutId.name,
      buOwner: accountWithOutId.buOwner,
      portfolio: accountWithOutId.portfolio,
      pcsLink: accountWithOutId.pcsLink,
      salesforceLink: accountWithOutId.salesforceLink,
      status: accountWithOutId.status,
      strategy: accountWithOutId.strategy,
    };
    return fullAccount;
  }
  private createShowAccountsResponse(
    response: Array<AccountWithKeyPeople>
  ): ShowAllResponse[] {
    return response.map((account) => {
      const keyPeopleWithNotes = this.assignNoteToKeyPeople(account.keyPeople);
      return new ShowAllResponse(
        account.id.value,
        account.name.value,
        account.buOwner?.toPrimitives(),
        account.portfolio?.toPrimitives(),
        account.status.value,
        account.salesforceLink?.value,
        account.pcsLink?.value,
        account.strategy?.value,
        keyPeopleWithNotes,
        account.createdAt,
        account.updatedAt
      );
    });
  }

  private assignNoteToKeyPeople(
    keyPeople: Array<KeyPeopleWithNotes>
  ): Array<CreateAccountKeyPeopleDto> {
    return keyPeople.map((keyPeopleWithNote: KeyPeopleWithNotes) => ({
      id: keyPeopleWithNote.id.value,
      name: keyPeopleWithNote.name.value,
      role: keyPeopleWithNote.role?.value,
      email: keyPeopleWithNote.email.value,
      note: keyPeopleWithNote.note?.value,
      createdAt: keyPeopleWithNote.createdAt,
      updatedAt: keyPeopleWithNote.updatedAt,
    }));
  }
}
