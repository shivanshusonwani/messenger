import "dotenv/config";

const config = {
	port: process.env.PORT,
	db_url: process.env.MONGO_URI,
	node_env: process.env.NODE_ENV,
	secret: process.env.JWT_SECRET,
};

export default Object.freeze(config);
