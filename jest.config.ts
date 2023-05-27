import { getJestProjects } from '@nrwl/jest';

export default {
  projects: getJestProjects(),
  setupFilesAfterEnv: ['./setupTests.ts'],
};
