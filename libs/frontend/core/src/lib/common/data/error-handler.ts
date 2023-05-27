import { AxiosError } from 'axios';
import { DataError } from '../domain/data-error';
import { Either } from '../domain/either';

export type ErrorKinds =
  | 'UnexpectedError'
  | 'NotFoundError'
  | 'ForbiddenError'
  | 'BadRequestError'
  | 'GatewayTimeoutError';

const handleErrorKind = (statusCode: number): ErrorKinds => {
  let kind: ErrorKinds;
  switch (statusCode) {
    case 404:
      kind = 'NotFoundError';
      break;
    case 400:
      kind = 'BadRequestError';
      break;
    case 403:
      kind = 'ForbiddenError';
      break;
    case 500:
      kind = 'UnexpectedError';
      break;
    case 504:
      kind = 'GatewayTimeoutError';
      break;
    default:
      kind = 'UnexpectedError';
      break;
  }
  return kind;
};

const handleErrorMessage = (error: string | string[]): Error => {
  if (Array.isArray(error)) {
    return new Error(error[0]);
  }
  return new Error(error);
};

interface AxiosDataError {
  message: string;
}

export const handleDataError = function <TResponse>(
  axiosError: AxiosError<AxiosDataError>
): Either<DataError, TResponse> {
  const kind = handleErrorKind(axiosError.response?.status || 500);
  const message = axiosError.response?.data
    ? axiosError.response?.data?.message
    : axiosError.message;
  const error = handleErrorMessage(message || 'Internal server error');
  return Either.left<DataError, TResponse>({ kind, error });
};
