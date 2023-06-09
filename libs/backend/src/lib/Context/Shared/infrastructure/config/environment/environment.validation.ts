import { plainToClass, Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsInstance,
  IsNumber,
  IsString,
  validateSync,
} from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Local = 'local',
  Test = 'test',
}

interface JAUTH {
  URL: string;
}

class JAuth {
  @IsString()
  URL: string;
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsString()
  DATABASE_HOST: string;
  @IsNumber()
  DATABASE_PORT: number;
  @IsString()
  DATABASE_USER: string;
  @IsString()
  DATABASE_PASSWORD: string;
  @IsString()
  DATABASE_NAME: string;
  @IsString()
  DATABASE_SCHEMA: string;
  @IsBoolean()
  DATABASE_SYNCHRONIZE: boolean;
  @IsString()
  JAUTH_URL: string;
  @IsString()
  JAUTH_APP_CODE: string;
  @IsString()
  JAUTH_APP_SECRET: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
