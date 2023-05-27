import { setupServer, type SetupServerApi } from 'msw/node';
import { handlers } from './handlers';

type SetupWorkerApiWithoutPrivate = Omit<SetupServerApi, never>;

// This configures a Service Worker with the given request handlers.
export const server = setupServer(...handlers) as SetupWorkerApiWithoutPrivate;
