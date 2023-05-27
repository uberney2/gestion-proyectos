import { BaseEntity, DimensionBaseEntity } from '../../common/domain';
export type QAId = string;
type QACurrentStatus = string;
type TestTools = string;
type AutomationLevel = string;
type ManualProcess = boolean;
type AutomatedProcess = boolean;

export interface QA extends DimensionBaseEntity, BaseEntity {
  id: QAId;
  currentStatus?: QACurrentStatus;
  testTools?: TestTools;
  automationLevel?: AutomationLevel;
  manualProcess?: ManualProcess;
  automatedProcess?: AutomatedProcess;
}
