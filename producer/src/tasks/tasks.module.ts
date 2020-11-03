import { Module } from '@nestjs/common';
import { TaskService } from './shared/task.service';
import { TasksController } from './tasks.controller';
import { TaskSchema } from './schemas/task.schemas'
import { MongooseModule } from '@nestjs/mongoose';
import { CreateTaskModule } from '../create-task/create-task.module'

@Module({
    imports:[
        MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
        CreateTaskModule
    ],
    controllers: [TasksController],
    providers: [TaskService]
})
export class TasksModule {}