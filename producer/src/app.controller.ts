import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitMqService } from './rabbit-mq/rabbit-mq.service';

@Controller('api/v1')
export class AppController {
  constructor(private readonly rabbitMqService: RabbitMqService) {}

  @Get()
  async getHello(){
    this.rabbitMqService.send('rabbit-mq-producer', {menssage: 'Menssagem'})
    return 'Menssagem enviada para fila'
  }
}
