import { HttpService } from '@nestjs/axios';
import { Body, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}
  async signIn(@Body() body): Promise<Object> {
    try {
      var response = await firstValueFrom(
        this.httpService.post('https://dummyjson.com/auth/login', body),
      );
      return response.data;
    } catch (e) {
      console.log(e);
      return 'invalid credential';
    }
  }
}
