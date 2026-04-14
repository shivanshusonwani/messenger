import express from "express";
import {
	sendMessage,
	getMessages,
	getConversation,
} from "../controller/message.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/send/:receiverId", protect, sendMessage);
router.get("/:receiverId", protect, getMessages);
router.get("/", protect, getConversation);

export default router;
