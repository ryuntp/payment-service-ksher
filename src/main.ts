import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/http-exception-filter';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true }),
  );

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Payment Service')
    .setDescription('The Payment Service APIs document')
    .addTag('Payment Service')
    .build();

  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Payment Service APIs',
  };

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('payment-service/swagger', app, document, customOptions);

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
  Logger.log(
    `🚀 payment-service is running on port: ${process.env.PORT || 3000}`,
  );
}
bootstrap();
