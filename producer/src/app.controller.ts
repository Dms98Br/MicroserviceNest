import { Controller, Get } from '@nestjs/common';
import { fromEventPattern } from 'rxjs';
import { AppService } from './app.service';
import { RabbitMqService } from './rabbit-mq/rabbit-mq.service';
import { TaskService } from './tasks/shared/task.service'

@Controller('api/v1')
export class AppController {
  constructor(
    private readonly rabbitMqService: RabbitMqService,
    ) {}

  @Get()
  async getHello(){
    this.rabbitMqService.send('rabbit-mq-producer', {menssage: 'Menssagem'})
    return 'Menssagem enviada para fila'
  }
}
