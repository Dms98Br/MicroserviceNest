import { Module } from '@nestjs/common';

import { TaskService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './task';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Task', schema: TaskSchema,
    }]),
  ],
  providers: [TaskService],
  controllers: [TasksController],
  exports: [TaskService]
})
export class TasksModule {
}