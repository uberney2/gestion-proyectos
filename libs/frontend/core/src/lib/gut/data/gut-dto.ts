import { Status } from '../../common';

export interface GutDto {
  id: string;
  status?: Status;
  observations?: string;
}
