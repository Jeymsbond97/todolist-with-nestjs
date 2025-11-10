import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todo } from '../todos/entities/todo.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'todo_list',
  entities: [Todo],
  synchronize: true,
};