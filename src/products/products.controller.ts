import { Controller, Get, Post, Query } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  //the object of ProductsService is provided to the developer by nestJs
  constructor(private productsService: ProductsService) {}
  // get all products
  @Post('/getAll')
  getAllProducts(@Query() query): Promise<Object> {
    return this.productsService.getAllProducts(query);
  }
}
