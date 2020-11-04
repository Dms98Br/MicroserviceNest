import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://DaniMoya:Senha@2020@nestjs.blh5m.mongodb.net/NestJS?retryWrites=true&w=majority'),    
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}