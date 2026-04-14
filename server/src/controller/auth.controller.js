import User from "../model/user.model.js";

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

		const user = await User.create({
			name,
			email,
			password,
		});

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

		const isMatch = password === user.password;
		if (!isMatch) {
			return res.status(400).json({ error: "Invalid credentials" });
		}

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
