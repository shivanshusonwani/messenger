import express from "express";

const app = express();

app.get("/health", (req, res) => {
	res.status(200).json({
		success: true,
		message: "Server is running",
	});
});

export default app;
