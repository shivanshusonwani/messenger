import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
	const { logout } = useAuth();
	return (
		<div className='w-75 border-r p-4 flex flex-col'>
			<h2 className='text-lg font-bold mb-4'>Users</h2>

			<div className='flex-1 space-y-2 overflow-y-auto'>
				<p className='border'>User 1</p>
				<p className='border'>User 2</p>
				<p className='border'>User 3</p>
				<p className='border'>User 4</p>
			</div>

			<button
				onClick={logout}
				className='w-fit p-2 bg-black text-white'>
				Logout
			</button>
		</div>
	);
};

export default Sidebar;
