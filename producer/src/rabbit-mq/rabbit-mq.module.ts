import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMqService } from './rabbit-mq.service';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports:[
    ClientsModule.register([
      {
        name: 'rabbit-mq-module',
        transport: Transport.RMQ,
        options:{
          urls:[
            'amqps://gheqsodj:KqIopiM5Fjph_nNAULNJhK76XgP4-Ica@jackal.rmq.cloudamqp.com/gheqsodj'
          ],
          queue: 'rabbit-mq-nest-js',
        },
      },
    ]),
  ],
  controllers:[

  ],  
  providers: [RabbitMqService],
  exports: [ RabbitMqService ]
})
export class RabbitMqModule {}
