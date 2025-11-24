import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,
  subject: String,
  description: String,
  deadline: Date,
  priority: String,
  status: { type: String, default: "Not Started" },
  userId: String,
});

export default mongoose.model("Task", taskSchema);
