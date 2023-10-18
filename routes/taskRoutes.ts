import express, { Router } from 'express';
import TaskController from '../controllers/TaskController';

const router: Router = express.Router();

router.post('/tasks', TaskController.createTask);
router.get('/tasks',TaskController.getAllTasks);
router.get('/tasks/:id',TaskController.getTask);
router.put('/tasks/:id',TaskController.updateTask);
router.delete('/Tasks/:id', TaskController.deleteTask);

export default router;