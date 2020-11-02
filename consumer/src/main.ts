import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule,{
      transport: Transport.RMQ,
      options:{
        urls:[
          'amqps://gheqsodj:KqIopiM5Fjph_nNAULNJhK76XgP4-Ica@jackal.rmq.cloudamqp.com/gheqsodj'
        ],
        queue: 'create-task',
        noAck: false,
        prefetchCount: 1
      },
    })
    await app.listenAsync()  
}
bootstrap();
