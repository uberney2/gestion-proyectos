export interface UnexpectedError {
  kind: 'UnexpectedError';
  error: Error;
}

export interface NotFoundError {
  kind: 'NotFoundError';
  error: Error;
}

export interface ForbiddenError {
  kind: 'ForbiddenError';
  error: Error;
}

export interface BadRequestError {
  kind: 'BadRequestError';
  error: Error;
}
export interface GatewayTimeoutError {
  kind: 'GatewayTimeoutError';
  error: Error;
}

export type DataError =
  | UnexpectedError
  | NotFoundError
  | ForbiddenError
  | BadRequestError
  | GatewayTimeoutError;
