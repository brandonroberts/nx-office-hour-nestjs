import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ApiFeatureConfigModule } from '@nx-office-hour-nestjs/api/feature-config';
import { ApiFeatureArticleModule } from '@nx-office-hour-nestjs/api/feature-article';
import { MongoConfiguration, mongoConfiguration } from '@nx-office-hour-nestjs/api/utils-config';

@Module({
  imports: [
    ApiFeatureConfigModule,
    ApiFeatureArticleModule,
    MongooseModule.forRootAsync({
      inject: [
        mongoConfiguration.KEY
      ],
      useFactory: (config: MongoConfiguration) => {
        return {
          uri: config.uri,
          dbName: config.dbName, 
        };
      }
    })
  ],
  controllers: [],
})
export class AppModule {}
