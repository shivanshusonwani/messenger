import { connect } from "mongoose";
import config from "./config.js";

const connectDB = async () => {
	try {
		await connect(config.db_url);
		console.log("Database Connected.");
	} catch (error) {
		console.log("Database Connection Failed!");
	}
};

export default connectDB;
