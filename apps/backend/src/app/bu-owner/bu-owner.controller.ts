import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BuOwnerFinderAllInjectable } from './bu-owner.application.proxy';
import { BuOwner } from '@delia/backend/bu-owner';
import { ShowAllBuOwner } from './dto/show-all-bu-owner';

@ApiTags('BuOwner')
@Controller('buOwner')
export class BuOwnerController {
  constructor(private buOwnerFinderAll: BuOwnerFinderAllInjectable) {}

  @Get()
  async findAll() {
    const response = await this.buOwnerFinderAll.run();
    return this.createShowBuOwnerResponse(response);
  }

  private createShowBuOwnerResponse(
    response: Array<BuOwner>
  ): ShowAllBuOwner[] {
    const newResponse = response.map(this.convertBuPrimitivesToShowAllBuOwner);
    return newResponse;
  }

  private convertBuPrimitivesToShowAllBuOwner(buOwner: BuOwner) {
    return new ShowAllBuOwner(
      buOwner.id.value,
      buOwner.name.value,
      buOwner.createdAt.value,
      buOwner.updatedAt.value
    );
  }
}
