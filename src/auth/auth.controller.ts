import { Body, Controller, Header, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signin')
  @Header('Access-Control-Allow-Origin', '*')
  getAllProducts(@Body() body): Promise<Object> {
    return this.authService.signIn(body);
  }
}
