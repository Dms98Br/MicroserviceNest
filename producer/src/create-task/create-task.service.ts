import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices'
@Injectable()
export class CreateTaskService {
    constructor(
        @Inject('create-task-nest-js')
        private readonly client: ClientProxy,
    ){}
    public async send( pattern: string, data: any ){
        return await this.client.emit( pattern, data)
    }
}
