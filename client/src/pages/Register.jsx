import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
	});
	const { register } = useAuth();
	const navigate = useNavigate();

	const handleChange = (e) =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await register(form);
			navigate("/");
		} catch (error) {
			console.error(error);
			alert("Registration failed");
		}
	};

	return (
		<div className='h-screen flex items-center justify-center'>
			<form
				onSubmit={handleSubmit}
				className='w-80 p-6 border rounded-lg space-y-4'>
				<h2 className='text-xl font-bold text-center'>Register</h2>

				<input
					type='text'
					name='name'
					placeholder='Name'
					value={form.name}
					onChange={handleChange}
					className='w-full p-2 border rounded'
				/>

				<input
					type='email'
					name='email'
					placeholder='Email'
					value={form.email}
					onChange={handleChange}
					className='w-full p-2 border rounded'
				/>

				<input
					type='password'
					name='password'
					placeholder='Password'
					value={form.password}
					onChange={handleChange}
					className='w-full p-2 border rounded'
				/>

				<button className='w-full bg-black text-white py-2 rounded cursor-pointer'>
					Register
				</button>

				<p className='text-sm text-center'>
					Already have an account?{" "}
					<Link
						to='/login'
						className='text-blue-600 font-semibold underline underline-offset-2 cursor-pointer'>
						Login
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Register;
