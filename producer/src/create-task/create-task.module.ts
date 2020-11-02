import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CreateTaskService } from './create-task.service'
@Module({
    imports:[
      ClientsModule.register([
        {
          name: 'create-task-nest-js',
          transport: Transport.RMQ,
          options:{
            urls:[
              'amqps://gheqsodj:KqIopiM5Fjph_nNAULNJhK76XgP4-Ica@jackal.rmq.cloudamqp.com/gheqsodj'
            ],
            queue: 'create-task',
          },
        },
      ])
    ],
    controllers:[
  
    ],  
    providers: [CreateTaskService],
    exports: [ CreateTaskService ]
  })
  export class CreateTaskModule{}