import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

//import { MathService } from './mathservice/math.service'; // WE DELETE MathService BECAUSE WE DO NOT NEED IT WHILE USING GRPC 

@Module({
  imports: [],
  controllers: [AppController],
 // providers: []// WE DELETE MathService,], BECAUSE WE DO NOT NEED IT WHILE USING GRPC 
})
export class AppModule {}
