import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./route/auth.routes.js";
import messageRoutes from "./route/message.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/health", (req, res) => {
	res.status(200).json({
		success: true,
		message: "Server is running",
	});
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

export default app;
