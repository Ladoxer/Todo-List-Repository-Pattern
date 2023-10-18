import express, { Application, NextFunction, Request, Response } from "express";
import mongoose, { Error } from "mongoose";
import taskRoutes from "./routes/taskRoutes";
// import dotenv from "dotenv";
// dotenv.config({path:'.env'});

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || "3002");

mongoose.connect('mongodb://127.0.0.1:27017/todo-repositoryPattern',)
.then(()=>{
  console.log("connected to DB");
})
.catch((err)=>{
  console.log(err);
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',taskRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Interbal Server Error'
  });
})

export default app;