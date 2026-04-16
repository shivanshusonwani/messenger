import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./route/auth.routes.js";
import userRoutes from "./route/user.routes.js";
import messageRoutes from "./route/message.routes.js";
import { app, allowedOrigins } from "./socket/socket.js";

app.use(
	cors({
		origin: allowedOrigins,
		credentials: true,
	}),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/health", (req, res) => {
	res.status(200).json({
		success: true,
		message: "Server is running",
	});
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);

export default app;
