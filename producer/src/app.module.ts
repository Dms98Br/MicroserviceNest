import { Module } from '@nestjs/common';
import { RabbitMqModule } from './rabbit-mq/rabbit-mq.module';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateTaskModule } from './create-task/create-task.module';
@Module({
  imports: [    
    TasksModule,
    MongooseModule.forRoot('mongodb+srv://DaniMoya:Senha@2020@nestjs.blh5m.mongodb.net/NestJS?retryWrites=true&w=majority'),
  ],
})
export class AppModule {}
