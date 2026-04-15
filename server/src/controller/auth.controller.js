import config from "../config/config.js";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// cookie options
const cookieOptions = {
	httpOnly: true,
	secure: config.node_env === "production",
	sameSite: config.node_env === "production" ? "none" : "lax",
	maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

export const register = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		if (!name || !email || !password) {
			return res.status(400).json({ error: "All fields are required" });
		}

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ error: "User already exists" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await User.create({
			name,
			email,
			password: hashedPassword,
		});

		const token = jwt.sign({ id: user._id }, config.secret, {
			expiresIn: "7d",
		});

		res.cookie("token", token, cookieOptions);

		return res.status(200).json({
			success: true,
			message: "User registered successfully",
			data: {
				id: user._id,
				name: user.name,
				email: user.email,
			},
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Signup failed, Please try after some time!",
			error: error.message,
		});
	}
};

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ error: "All fields are required" });
		}

		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ error: "Invalid credentials" });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ error: "Invalid credentials" });
		}

		const token = jwt.sign({ id: user._id }, config.secret, {
			expiresIn: "7d",
		});

		res.cookie("token", token, cookieOptions);

		return res.status(200).json({
			success: true,
			message: "Logged in successfully",
			data: {
				id: user._id,
				name: user.name,
				email: user.email,
			},
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Login failed, Please try after some time!",
			error: error.message,
		});
	}
};

export const logout = (req, res) => {
	return res.clearCookie("token").status(200).json({
		success: true,
		message: "Logged out successfully",
	});
};

export const getMe = async (req, res) => {
	try {
		const user = await User.findById(req.userId).select("-password");
		res.status(200).json({ success: true, user });
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Unable to fetch user!",
			error: error.message,
		});
	}
};
