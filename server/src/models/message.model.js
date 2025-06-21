import { Schema, model } from "mongoose";

const messageSchema = new Schema(
  {
    senderId: { type: String, required: true }, // clerkId
    receiverId: { type: String, required: true }, // clerkId
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = model("Message", messageSchema);
export default Message;
