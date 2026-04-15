import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./route/auth.routes.js";
import userRoutes from "./route/user.routes.js";
import messageRoutes from "./route/message.routes.js";

const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	}),
);
app.use(express.json());
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
