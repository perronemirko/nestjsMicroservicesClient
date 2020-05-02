import { Controller, Get, Logger, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { MathService } from './mathservice/math.service';
import { MessagePattern, EventPattern } from '@nestjs/microservices';


@Controller()
export class AppController {
  //Create a logger instance 
  private logger = new Logger('AppController');

  // Inject the math service
  constructor(private readonly appService: AppService,
    private mathService: MathService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Map the 'POST /add' route to this method
  @Post('add')
  async accumulate(@Body('data') data: number[]){
    return await this.mathService.accumulate(data); // use math service to calc result & return
  }
}
