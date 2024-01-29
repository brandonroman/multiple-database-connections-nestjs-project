import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('conn-a')
  connectionA(@Query('query') query: string): Promise<any> {
    return this.appService.connectionA(query);
  }

  @Get('conn-b')
  connectionB(@Query('query') query: string): Promise<any> {
    return this.appService.connectionB(query);
  }
}
