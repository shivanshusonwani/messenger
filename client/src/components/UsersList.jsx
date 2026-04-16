import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../services/api.js";
import { setUsers, setSelectedUser } from "../redux/userSlice.js";

const UsersList = () => {
	const dispatch = useDispatch();
	const { users, selectedUser, onlineUsers } = useSelector(
		(state) => state.user,
	);

	useEffect(() => {
		const fetchUsers = async () => {
			const { data } = await API.get("/users");
			dispatch(setUsers(data.data));
		};
		fetchUsers();
	}, []);

	return (
		<div className='space-y-2'>
			{users.map((user) => {
				const isOnline = onlineUsers.includes(user._id);

				return (
					<div
						key={user._id}
						onClick={() => dispatch(setSelectedUser(user))}
						className={`p-2 rounded cursor-pointer ${
							selectedUser?._id === user._id ? "bg-gray-200" : ""
						}`}>
						<span>{user.name}</span>
						{isOnline && <span className='text-green-500 ml-2'>●</span>}
					</div>
				);
			})}
		</div>
	);
};

export default UsersList;
