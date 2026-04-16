import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);

const allowedOrigins = [process.env.CLIENT_URL || "http://localhost:5173"];
const io = new Server(server, {
	cors: {
		origin: allowedOrigins,
		credentials: true,
		methods: ["GET", "POST"],
	},
});

const userSocketMap = {};

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
	const userId = socket.handshake.query.userId;

	console.log("User connected", socket.id);

	if (userId) {
		userSocketMap[userId] = socket.id;
	}

	io.emit("getOnlineUsers", Object.keys(userSocketMap));

	socket.on("disconnect", () => {
		console.log("User disconnect", socket.id);
		delete userSocketMap[userId];
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});

export { app, io, server, allowedOrigins };
