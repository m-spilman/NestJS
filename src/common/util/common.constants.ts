import { ValidationPipeOptions } from '@nestjs/common';

export const VALIDATION_PIPE_OPTIONS: ValidationPipeOptions = {
  whitelist: true, // Remove unknown properties from DTOs
  forbidNonWhitelisted: true, // Throw an error if unknown properties are found
  transform: true, // Transform payload to DTO instance
  transformOptions: {
    enableImplicitConversion: true, // Convert query params to their types
  },
};
