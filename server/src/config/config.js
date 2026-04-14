import "dotenv/config";

const config = {
	port: process.env.PORT,
	db_url: process.env.MONGO_URI,
};

export default Object.freeze(config);
