import { Module } from '@nestjs/common';
import { TaskService } from './shared/task.service';
import { TasksController } from './tasks.controller';
import { TaskSchema } from './schemas/task.schemas'
import { MongooseModule } from '@nestjs/mongoose';
import { RabbitMqModule } from '../rabbit-mq/rabbit-mq.module';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { RabbitMqService } from '../rabbit-mq/rabbit-mq.service'

@Module({
    imports:[
        MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
        RabbitMqModule
    ],
    controllers: [TasksController],
    providers: [TaskService]
})
export class TasksModule {}