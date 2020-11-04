
import { Controller } from '@nestjs/common';
import { MessagePattern, RmqContext, Ctx, Payload,} from '@nestjs/microservices';
import { AppService } from './app.service';
import { TaskService } from './tasks/tasks.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService, private readonly taskService: TaskService) {
   
  }

  @MessagePattern('rabbit-mq-producer')
  public async execute(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const orginalMessage = context.getMessage();
    const result = await this.taskService.create( data )
    console.log('result', result);
    channel.ack(orginalMessage);
  }
}