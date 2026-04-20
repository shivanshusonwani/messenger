import "dotenv/config";
import connectDB from "./src/config/db.js";
import { server } from "./src/socket/socket.js";
import "./src/app.js";
import config from "./src/config/config.js";

const port = config.port || 3000;

const startServer = async () => {
	try {
		await connectDB();

		server.listen(port, () => console.log("server is running on port:", port));
	} catch (error) {
		console.error("server startup failed", error);
	}
};

startServer();
