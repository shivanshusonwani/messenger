import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";

export const sendMessage = async (req, res) => {
	try {
		const senderId = req.userId;
		const { receiverId } = req.params;
		const { message } = req.body;

		if (!message) {
			return res.status(400).json({ error: "Message or image required" });
		}

		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			});
		}

		const newMessage = await Message.create({
			conversationId: conversation._id,
			senderId,
			receiverId,
			message,
		});

		await conversation.save();

		return res.status(201).json({
			success: true,
			data: newMessage,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
			error: error.message,
		});
	}
};

export const getMessages = async (req, res) => {
	try {
		const senderId = req.userId;
		const { receiverId } = req.params;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});

		if (!conversation) {
			return res.status(200).json([]);
		}

		const messages = await Message.find({
			conversationId: conversation._id,
		}).sort({ createdAt: 1 });

		res.status(200).json(messages);
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Internal Server Error",
			error: error.message,
		});
	}
};

export const getConversation = async (req, res) => {
	try {
		const userId = req.userId;

		const conversations = await Conversation.find({
			participants: userId,
		})
			.populate("participants", "-password")
			.sort({ updatedAt: -1 });

		res.status(200).json(conversations);
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Internal Server Error",
			error: error.message,
		});
	}
};
