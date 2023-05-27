export interface HttpClient {
  post<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config?: Record<string, unknown>
  ): Promise<TResponse>;
  patch<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config?: Record<string, unknown>
  ): Promise<TResponse>;
  put<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config?: Record<string, unknown>
  ): Promise<TResponse>;
  get<TResponse>(
    path: string,
    config?: Record<string, unknown>
  ): Promise<TResponse>;
  delete<TResponse>(
    path: string,
    config?: Record<string, unknown>
  ): Promise<TResponse>;
}

// TODO: move this interface to a better place
export interface ApiConfig {
  baseURL: string;
  accessToken?: string;
}
