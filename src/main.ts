import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

// Create a logger instance
const logger = new Logger('Main Client');
// This is serverside
async function bootstrap() {
  logger.log('Main Client boostrap.')
  const app = await NestFactory.create(AppModule);
  await app.listen(6000);
}
bootstrap();
