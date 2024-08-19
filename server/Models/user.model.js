import mongoose from "mongoose";
const chatSchema = new mongoose.Schema(
  {
    sender: {
      type: String,
    },
    receiver: {
      type: String,
    },
    message: {
      type: [String],
    },
  },
  { timestamps: true }
);
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1593349480506-8433634cdcbe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    chats: { type: [chatSchema], default: [] },
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);
export default User;
