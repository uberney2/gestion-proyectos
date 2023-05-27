import { worker } from '@delia/mock-api';
console.log('mock env');
worker.start({
  onUnhandledRequest: 'bypass',
});

export const environment = {
  production: false,
  apiBaseURL: 'http://localhost:4200/api/',
};
