
import { Controller, Logger, Post, Body } from '@nestjs/common';
import {IGrpcService} from './grpc.interface';
import {Client, ClientGrpc} from '@nestjs/microservices';
import {microserviceOptions} from './grpc.options';

@Controller()
export class AppController {
  //Create a logger instance 
  private logger = new Logger('AppController');

  @Client(microserviceOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit(){
    this.grpcService = this.client.getService<IGrpcService>('AppController');
  }


  // Map the 'POST /add' route to this method
  @Post('add')
  async accumulate(@Body('data') data: number[]){
    return await this.grpcService.accumulate({data}); // Now we are passing 'data' as an object instead
  }
}



// import { Controller, Get, Logger, Post, Body } from '@nestjs/common';
// import { AppService } from './app.service';
// import { MathService } from './mathservice/math.service';
// import { MessagePattern, EventPattern } from '@nestjs/microservices';


// @Controller()
// export class AppController {
//   //Create a logger instance 
//   private logger = new Logger('AppController');

//   // Inject the math service
//   constructor(private readonly appService: AppService,
//     private mathService: MathService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }

//   // Map the 'POST /add' route to this method
//   @Post('add')
//   async accumulate(@Body('data') data: number[]){
//     return await this.mathService.accumulate(data); // use math service to calc result & return
//   }
// }
