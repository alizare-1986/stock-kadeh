import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    
  },
  email: {
    type: String,
    requierd: true,
  },
  password: {
    type: String,
    requierd: true,
  },
  role: {
    type: String,
    default: "USER",
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});
const User = models.User || model("User", userSchema);
export default User;
