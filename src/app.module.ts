import {
  HttpModule,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { AllExceptionsFilter } from './app.filters.exceptions';
import { BearerMiddleware } from './app.middleware';
import { SubscriptionModule } from './subscription/subscription.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({ envFilePath: `.env.${process.env.NODE_ENV}` }),
    ThrottlerModule.forRoot({ ttl: 60, limit: 10 }),
    SubscriptionModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BearerMiddleware).forRoutes('subscriptions');
  }
}
