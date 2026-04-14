import express from "express";
import authRoutes from "./route/auth.routes.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
	res.status(200).json({
		success: true,
		message: "Server is running",
	});
});

app.use("/api/auth", authRoutes);

export default app;
