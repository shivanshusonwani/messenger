import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../services/api.js";
import { setUsers, setSelectedUser } from "../redux/userSlice.js";
import { useAuth } from "../context/AuthContext.jsx";

const UsersList = () => {
	const dispatch = useDispatch();
	const { users, selectedUser, onlineUsers } = useSelector(
		(state) => state.user,
	);

	const { user: authUser } = useAuth();

	useEffect(() => {
		const fetchUsers = async () => {
			const { data } = await API.get("/users");
			dispatch(setUsers(data.data));
		};
		fetchUsers();
	}, [dispatch]);

	return (
		<div className='space-y-2'>
			{users.map((user) => {
				const isOnline = onlineUsers.includes(user._id);

				return (
					<div
						key={user._id}
						onClick={() => dispatch(setSelectedUser(user))}
						className={`px-4 py-1.5 rounded cursor-pointer ${
							selectedUser?._id === user._id ? "bg-gray-200" : ""
						}`}>
						<div className='flex gap-2 items-center'>
							{/* Avatar Container */}
							<div className='relative w-10 h-10'>
								<div className='w-full h-full flex items-center justify-center bg-black text-white font-bold rounded-full overflow-hidden'>
									{user.avatar ? (
										<img
											src={user.avatar}
											alt={user.name}
											className='w-full h-full object-cover'
										/>
									) : (
										<span className='text-sm'>
											{user.name?.charAt(0).toUpperCase()}
										</span>
									)}
								</div>

								{/* Online Status Indicator */}
								{isOnline && (
									<span className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full'></span>
								)}
							</div>

							<span>{user.name}</span>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default UsersList;
