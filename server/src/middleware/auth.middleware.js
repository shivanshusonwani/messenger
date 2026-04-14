import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
	try {
		const token = req.cookies.token;

		if (!token) {
			return res.status(401).json({ error: "Not authorized" });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.userId = decoded.id;

		next();
	} catch (error) {
		console.error("JWT Verification Error:", error.message);

		return res.status(401).json({
			success: false,
			message: "Unauthorized: Invalid or expired token",
		});
	}
};
