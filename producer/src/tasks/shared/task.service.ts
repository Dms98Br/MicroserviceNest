import { Get, Injectable } from '@nestjs/common';
import { Task } from './task';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateTaskService } from '../../create-task/create-task.service'
@Injectable()
export class TaskService {

    constructor(@InjectModel('Task') 
    private readonly taskModel: Model<Task>,
    private createTaskService: CreateTaskService
    ){}
    
    async getAll(){
        return await this.taskModel.find().exec();
    }

    async getById( id: string ){
        return await this.taskModel.findById(id).exec();
    }

    async create( task: Task ){
        const createdTask = new this.taskModel(task);
        this.createTaskService.send('Create-Task', createdTask)
        return await createdTask.save();
    }

    async update(id: string, task: Task ){
        await this.taskModel.updateOne({ _id : id }, task).exec();
        return this.getById(id);
    }

    async delete( id: string ){
        return await this.taskModel.deleteOne({ _id : id }).exec();
    }

}
