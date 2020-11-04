import * as mongoose from 'mongoose'

export const TaskSchema = new mongoose.Schema({
    description: { type: String, required: true},
    completed: { type: Boolean, required: true}
})
export interface Task{
    description: string;
    completed: boolean;
}
