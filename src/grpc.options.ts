import { Logger } from '@nestjs/common';
import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

// Create a logger instance
const logger = new Logger('Main');

export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package:'app',
    protoPath: join(__dirname, '../src/app.proto'),
  }
};