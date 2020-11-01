import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Transport, MessagePattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('rabbit-mq-producer')
  public async execute(@Payload() data:any, @Ctx() context: RmqContext){
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    console.log('data', data);
    channel.ack(originalMessage)
    
  }  
}
