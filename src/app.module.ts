import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { ProductsModule } from './products/products.module';

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, ProductsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {
  constructor() {
    console.log('App Module! ');
  }
}
