import { Injectable } from '@nestjs/common';
import { BuOwnerCreatorInjectable } from '../bu-owner/bu-owner.application.proxy';
import { PortfolioCreatorInjectable } from '../portfolio/portfolio.application.proxy';

const buOwners = [
  { id: '7b81fbb3-bf30-45e9-8b8a-055580939684', name: 'Adobe' },
  { id: 'e2eed140-fb42-43ed-a033-860930fb06ee', name: 'Atlanta' },
  { id: '5e777aab-cf6d-4b6e-a563-801f1ae440c4', name: 'Automation' },
  { id: '514ae267-de57-4308-baad-9ee6107a5631', name: 'Bangalore' },
  { id: '5f71f66d-ba13-43e8-beca-92b999768d7c', name: 'BI' },
  { id: 'ea07cac8-3806-4761-9ddc-7ec7664afdc4', name: 'CDDO' },
  { id: '91c320b0-366b-4496-90dc-53db1e78ad5f', name: 'Charlotte' },
  { id: '2819f3d1-ebba-478e-bb74-77a7554c5fef', name: 'Chennai' },
  { id: '058934c9-261a-42a5-a46a-69721ef055be', name: 'Cld Platform Sol' },
  { id: '4e9b49d6-2f9b-4db7-80dd-d2ed12aeb9fc', name: 'Cloud Infra and APIM' },
  { id: 'c83e3eca-98d0-49b4-9c17-cc8d9dca04d1', name: 'Colombia' },
  { id: 'fd99abf9-89f0-4ac5-97a0-c006407acb44', name: 'Colombia Apps CM CO' },
  { id: 'fca5e54e-50ed-49d1-93c4-c5ea88f98986', name: 'Colombia Apps DG CO' },
  { id: '49d4e2f4-a7b7-4ddb-a21e-714918921b17', name: 'Commerce' },
  { id: 'a9728c29-b0f2-4812-b666-51f6d627b0d6', name: 'Corp Perf Mgmt' },
  { id: 'cf7c1046-f5a7-4e5c-8190-658b37ef3e27', name: 'Custom Product Dev' },
  { id: '4f1d8db7-2e6d-46ed-bf77-40b7b5b4cb8f', name: 'Dallas' },
  { id: '45c72f7c-2bc8-43a1-8f27-b88b27981a29', name: 'Data Solutions' },
  { id: '06cb7a2b-a4c3-47e8-a285-a760367c0da4', name: 'Denver' },
  { id: '44385dff-2fb0-4af0-b020-aa2f54303a19', name: 'Detroit' },
  { id: '7b11c8b9-1c0f-4272-84bf-d829d47ecee8', name: 'Digital Marketing' },
  { id: 'c0207573-f2cb-467b-851d-c3290762cce7', name: 'Digital Strategy' },
  { id: 'f5d1a665-79c4-465c-a3bc-3fe4a740fcde', name: 'Experience Design' },
  { id: 'a6741e99-242a-4fba-bff8-069c35618243', name: 'Fin Services' },
  { id: '8e6449a5-5698-41e5-9021-45e8d35892d9', name: 'Hangzhou' },
  { id: 'eb536c96-50df-494f-8f02-a47408e76428', name: 'Healthcare' },
  { id: '485de00e-ceae-499b-b7cd-e0328e74f7c7', name: 'Houston' },
  { id: 'ca3b8c76-a013-4cea-bf43-8377aeca2d64', name: 'LatAM AR' },
  { id: 'bca98ef2-c3b5-48eb-838b-203d4dbc0e3f', name: 'LatAM CL' },
  { id: 'b5d9d1a8-340a-4a2a-a889-b74839d861fe', name: 'LatAM CO' },
  { id: '1e1a5312-00f5-4430-a99e-c78f6c831ad4', name: 'LatAM UY' },
  { id: 'ceb1b71a-1772-404d-b88a-2a5446238bec', name: 'LDC' },
  { id: 'b6598226-0f7d-4734-8671-ca8d9ba015b2', name: 'Lead Development' },
  { id: 'c9d97db9-6ab0-431a-9374-02e92d0ceff3', name: 'Madamalla Core' },
  { id: 'fb1e48ea-b267-4fe8-bd80-b820e1c13469', name: 'Mgmt Consulting' },
  { id: '89334bad-e850-424c-9649-097dc5ef44fa', name: 'Microsoft' },
  { id: '3777060f-14ea-46f4-8218-fe3ee81d9e12', name: 'Minneapolis' },
  { id: '6d0bfe4a-762d-4db0-8145-684577d8758d', name: 'Mobile Solutions' },
  { id: '89c010a7-60f7-4524-a5fa-63f8d3d86d31', name: 'Nagpur' },
  { id: '86eeb41f-42dd-4ba6-bfaf-c35693f68fb2', name: 'Nair Core' },
  { id: '66cae384-55f1-4bb9-b1e0-e052e8a5446f', name: 'Ohio' },
  { id: '293d6066-6ddd-4e8c-87d8-276681031683', name: 'ORCL ERP' },
  { id: '93478d00-9e7d-4b65-abba-744c182ee413', name: 'Sales Leadership' },
  { id: '421ae19a-fd3f-4b85-b9a8-62c910c65a97', name: 'SFES' },
  { id: '02fb08b8-09ce-42b7-b06a-384f238bf2b5', name: 'Sitecore' },
  { id: '6736c509-ba78-41b5-9457-0ed726ba5a8a', name: 'Sitecore RS' },
  { id: '9f421b78-cfd3-4a1b-a5bc-543e526bbdf1', name: 'Southern Cal' },
  { id: 'ffe44212-a414-410a-bd7d-a525b28d104c', name: 'St. Louis' },
  { id: '9a18c0af-e57e-45d7-b74c-1d5e671db42f', name: 'US GDC' },
];

const portfolios = [
  { id: '7a18c0af-e57e-45d7-b74c-1d5e671db51a', name: 'Perficient' },
  { id: '7a18c0af-e57e-45d7-b74c-1d5e671db52b', name: 'Assurant' },
];

type SeedErrorBody = {
  id: string;
  message: string;
};

type SeedResults = {
  successRecords: string[];
  erroredRecords: SeedErrorBody[];
};

@Injectable()
export class SeederService {
  constructor(
    private buOwnerCreator: BuOwnerCreatorInjectable,
    private portfolioCreator: PortfolioCreatorInjectable
  ) {}

  async seedBuOwner(): Promise<SeedResults | void> {
    const erroredRecords: SeedErrorBody[] = [];
    const successRecords: string[] = [];

    for (const buOwner of buOwners) {
      try {
        await this.buOwnerCreator.run(buOwner);
        successRecords.push(buOwner.id);
      } catch (error) {
        erroredRecords.push({ id: buOwner.id, message: error.message });
      }
    }

    return {
      successRecords,
      erroredRecords,
    };
  }

  async seedPortfolio(): Promise<SeedResults | void> {
    const erroredRecords: SeedErrorBody[] = [];
    const successRecords: string[] = [];

    for (const portfolio of portfolios) {
      try {
        await this.portfolioCreator.run(portfolio);
        successRecords.push(portfolio.id);
      } catch (error) {
        erroredRecords.push({ id: portfolio.id, message: error.message });
      }
    }

    return {
      successRecords,
      erroredRecords,
    };
  }
}
