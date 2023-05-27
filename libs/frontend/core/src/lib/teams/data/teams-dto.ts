import { Status } from '../../common';

export interface TeamDto {
  id: string;
  composition?: string;
  teamConfiguration?: string;
  englishLevel?: string;
  deployDate?: string;
  status?: Status;
  observations?: string;
}
