import { Status } from '../../common';

export interface QADto {
  id: string;
  currentStatus?: string;
  testTools?: string;
  automationLevel?: string;
  manualProcess?: boolean;
  automatedProcess?: boolean;
  status?: Status;
  observations?: string;
}
