import { Module } from '@nestjs/common';

import {
  ConfigModule,
  ConfigService
} from '@nestjs/config';

import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from './config/mongo.config';

import { AuthModel } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({

  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),

    AuthModel,

  ],

  controllers: [AppController],
  providers: [AppService],

})

export class AppModule { }
