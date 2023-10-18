import mongoose, { Document, Schema} from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  isCompleted: boolean;
}

const TaskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  isCompleted:{
    type: Boolean,
    default: false
  }
});

export default mongoose.model<ITask>('Task', TaskSchema);