/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppConfiguration, appConfiguration } from '@nx-office-hour-nestjs/api/utils-config';

import { AppModule } from './app/app.module';

function configureSwagger(
  appConfig: AppConfiguration,
  app: INestApplication,
  globalPrefix: string) {
    const swaggerDocOptions = new DocumentBuilder()
      .setTitle('Nx Article API')
      .setDescription('Nx Article API Docs')
      .setVersion('1.0.0')
      .addServer(appConfig.domain, 'development')
      .build();

    const swaggerDoc = SwaggerModule.createDocument(app, swaggerDocOptions);
    const swaggerUiPath = `/${globalPrefix}/docs`;
    SwaggerModule.setup(swaggerUiPath, app, swaggerDoc);
    Logger.log(
      `Swagger Docs enabled: ${appConfig.domain}${swaggerUiPath}`,
      'NestApplication'
    );
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get<AppConfiguration>(appConfiguration.KEY);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  configureSwagger(appConfig, app, globalPrefix);
  await app.listen(appConfig.port, () => {
    Logger.log(`Listening on: ${appConfig.domain}/${globalPrefix}`);
  });
}

bootstrap();
