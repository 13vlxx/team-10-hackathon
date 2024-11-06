import { Logger } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { IsNumber, IsString, validateSync } from 'class-validator';
import { exit } from 'process';

export class EnvironmentVariables {
  @IsNumber()
  PORT: number = 3000;

  @IsString()
  FRONT_URL: string = 'http://localhost:3000';

  @IsString()
  JWT_SECRET: string = 'mY-SUp3r-S3cr3t[JwT]*T0k3n';

  @IsString()
  JWT_EXPIRATION: string = '7d';

  @IsString()
  DATABASE_URL: string;
}

export function validateEnv(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length) {
    new Logger(validateEnv.name).error(errors.toString());
    exit();
  }
  return validatedConfig;
}
