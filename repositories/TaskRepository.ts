import { Model, Document } from "mongoose";
import Task, { ITask } from "../models/Task";

class TaskRepository {

  constructor(private taskModel: Model<ITask>){ }

  async createTask(title: string, description: string): Promise<ITask> {
    return await this.taskModel.create({title, description});
  }

  async getTaskById(id: string): Promise<ITask | null> {
    return await this.taskModel.findById(id);
  }

  async getAllTasks(): Promise<ITask[]> {
    return await this.taskModel.find();
  }

  async updateTask(id: string, update: Partial<ITask>): Promise<ITask | null>{
    return await this.taskModel.findByIdAndUpdate(id, update, {new: true});
  }

  async deleteTask(id: string): Promise<void> {
    await this.taskModel.findByIdAndDelete(id);
  }
}

export default new TaskRepository(Task);