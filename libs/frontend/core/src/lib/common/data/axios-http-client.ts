import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ApiConfig, HttpClient } from './http-client';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export default class AxiosHttpClient implements HttpClient {
  private client: AxiosInstance;

  protected createAxiosClient(apiConfig: ApiConfig): AxiosInstance {
    return axios.create({
      baseURL: apiConfig.baseURL,
      headers: {
        'Content-Type': 'application/json',
        ...(apiConfig.accessToken && {
          Authorization: `Token ${apiConfig.accessToken}`,
        }),
      },
      timeout: 10 * 1000,
    });
  }
  constructor(apiConfig: ApiConfig) {
    this.client = this.createAxiosClient(apiConfig);
  }

  get<TResponse>(
    path: string,
    config: Record<string, unknown>
  ): Promise<TResponse> {
    return this.client
      .get<TResponse>(path, config)
      .then(responseBody<TResponse>);
  }

  delete<TResponse>(
    path: string,
    config: Record<string, unknown>
  ): Promise<TResponse> {
    return this.client.delete<TResponse>(path).then(responseBody<TResponse>);
  }

  put<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config: Record<string, unknown>
  ): Promise<TResponse> {
    return this.client
      .put<TResponse>(path, payload, config)
      .then(responseBody<TResponse>);
  }

  post<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config: Record<string, unknown>
  ): Promise<TResponse> {
    return this.client
      .post<TResponse>(path, payload, config)
      .then(responseBody<TResponse>);
  }

  patch<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config: Record<string, unknown>
  ): Promise<TResponse> {
    return this.client
      .patch<TResponse>(path, payload, config)
      .then(responseBody<TResponse>);
  }
}
