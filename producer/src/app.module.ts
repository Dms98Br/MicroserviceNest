import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMqModule } from './rabbit-mq/rabbit-mq.module';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RabbitMqService } from './rabbit-mq/rabbit-mq.service';
@Module({
  imports: [
    RabbitMqModule,
    TasksModule,
    MongooseModule.forRoot('mongodb+srv://DaniMoya:Senha@2020@nestjs.blh5m.mongodb.net/NestJS?retryWrites=true&w=majority'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
