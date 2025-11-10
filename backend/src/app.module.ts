import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    databaseConfig,
    TodosModule,
  ],
})
export class AppModule {}