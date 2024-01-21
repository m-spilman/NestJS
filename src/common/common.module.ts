import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true, // Remove unknown properties from DTOs
        forbidNonWhitelisted: true, // Throw an error if unknown properties are found
        transform: true, // Transform payload to DTO instance
        transformOptions: {
          enableImplicitConversion: true, // Convert query params to their types
        },
      }),
    },
  ],
})
export class CommonModule {}
