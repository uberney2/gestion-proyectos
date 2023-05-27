import { JAuthRemoteDataSource } from '../infrastructure/JAuthRemoteDataSource';
export class JwtGetter {
  constructor(private jAuthRemoteData: JAuthRemoteDataSource) {}

  async run(autCode: string): Promise<string> {
    return await this.jAuthRemoteData.getAuthorizationToken(autCode);
  }
}
