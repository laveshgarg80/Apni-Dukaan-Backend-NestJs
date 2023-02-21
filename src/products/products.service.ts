import { HttpService } from '@nestjs/axios';
import { Injectable, Query } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private readonly httpService: HttpService) {}
  async getAllProducts(@Query() query): Promise<Object> {
    var response = await firstValueFrom(
      this.httpService.get(
        `https://dummyjson.com/products?limit=${query.limit}`,
      ),
    );
    console.log(response.data);
    return response.data;
  }
}
