import { Injectable, BadRequestException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { lastValueFrom, map, catchError, throwError } from 'rxjs';
import { EnvironmentConfigService } from '../../Shared/infrastructure/config/environment/environment.service';

@Injectable()
export class JAuthRemoteDataSource {
  constructor(
    private readonly httpService: HttpService,
    private readonly config: EnvironmentConfigService
  ) {}

  public async getAuthorizationToken(authCode: string): Promise<string> {
    return await lastValueFrom(
      this.httpService
        .post<{ token: string }>(
          `${this.config.getJAuthUrl()}/api/v2/authentication/token`,
          {
            appCode: this.config.getJAuthAppCode(),
            appSecret: this.config.getJAuthAppSecret(),
            authCode,
          }
        )
        .pipe(
          map(
            (response: AxiosResponse<{ token: string }>) => response.data.token
          ),
          catchError((error) => {
            if (error?.response?.status === 400) {
              return throwError(() => new BadRequestException());
            } else {
              return throwError(() => new Error(error));
            }
          })
        )
    );
  }
}
