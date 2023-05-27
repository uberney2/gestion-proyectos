import { JwtGetter } from '@delia/backend/auth';
import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository.proxy';

@Injectable()
export class AuthJwtGetter extends JwtGetter {
  constructor(authRepository: AuthRepository) {
    super(authRepository);
  }
}
