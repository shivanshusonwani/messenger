import { Schema, model } from "mongoose";

const messageSchema = new Schema(
	{
		conversationId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Conversation",
			required: true,
		},
		senderId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		receiverId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		message: {
			type: String,
			trim: true,
		},
	},
	{ timestamps: true },
);

const Message = model("Message", messageSchema);
export default Message;
