import { useState } from "react";

const Login = () => {
	const [form, setForm] = useState({ email: "", password: "" });

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(form);
	};

	return (
		<div className='h-screen flex items-center justify-center'>
			<form
				onSubmit={handleSubmit}
				className='w-80 p-6 border rounded-lg space-y-4'>
				<h2 className='text-xl font-bold text-center'>Login</h2>

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
					Login
				</button>
				<p className='text-sm text-center'>
					Don't have an account?{" "}
					<span className='text-blue-600 font-semibold underline underline-offset-2 cursor-pointer'>
						Sign Up
					</span>
				</p>
			</form>
		</div>
	);
};

export default Login;
