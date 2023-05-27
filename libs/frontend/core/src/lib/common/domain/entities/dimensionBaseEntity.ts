type Observations = string;
export type Status = 'Good' | 'Warning' | 'Bad' | 'Not Defined';
export interface DimensionBaseEntity {
  observations?: Observations;
  status?: Status;
}

export enum DimensionStatus {
  GOOD = 'Good',
  WARNING = 'Warning',
  BAD = 'Bad',
  NOT_DEFINED = 'Not Defined',
}
