import { setupWorker, type SetupWorkerApi } from 'msw';
import { handlers } from './handlers';

type SetupWorkerApiWithoutPrivate = Omit<SetupWorkerApi, never>;

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers) as SetupWorkerApiWithoutPrivate;
