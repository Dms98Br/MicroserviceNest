import * as mongoose from 'mongoose'

export const TaskSchema = new mongoose.Schema({
    description: { type: String},
    completed: { type: Boolean}
})
export interface Task{
    description: string;
    completed: boolean;
}
