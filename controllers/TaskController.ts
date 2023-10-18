import { Request, Response } from "express";
import TaskRepository from "../repositories/TaskRepository";

class TaskController {

  async createTask(req: Request,res: Response): Promise<void> {
    try {
      const {title, description} = req.body;
      const task = await TaskRepository.createTask(title,description);
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({
        error: 'Internal Server Error'
      });
    }
  }

  async getTask(req: Request, res: Response): Promise<void> {
    try {
      const {id} = req.body;
      const task = await TaskRepository.getTaskById(id);
      if(task){
        res.status(200).json(task);
      }else{
        res.status(404).json({
          error: 'Task not found'
        });
      }
    } catch (error) {
      res.status(500).json({
        error: 'Internal Server Error'
      });
    }
  }

  async getAllTasks(req: Request, res: Response): Promise<void> {
    try {
      const tasks = await TaskRepository.getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({
        error: 'Internal Server Error'
      });
    }
  }

  async updateTask(req: Request, res: Response): Promise<void> {
    try {
      const {id} = req.params;
      const update = req.body;
      const updatedTask = await TaskRepository.updateTask(id, update);
      if(updatedTask){
        res.status(200).json(updatedTask);
      }else{
        res.status(404).json({
          error: 'Task not found'
        });
      }
    } catch (error) {
      res.status(500).json({
        error: 'Internal Server Error'
      });
    }
  }

  async deleteTask(req: Request, res: Response): Promise<void> {
    try {
      const {id} = req.params;
      await TaskRepository.deleteTask(id);
    } catch (error) {
      res.status(500).json({
        error: 'Internal Server Error'
      });
    }
  }

}

export default new TaskController();