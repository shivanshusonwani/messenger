import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../context/AuthContext";
import UsersList from "./UsersList";
import API from "../services/api";
import { setConversation } from "../redux/messageSlice";

const Sidebar = () => {
	const { logout } = useAuth();
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchConversation = async () => {
			try {
				const { data } = await API.get("/messages");
				dispatch(setConversation(data));
			} catch (error) {
				console.error(error);
			}
		};

		fetchConversation();
	}, []);

	return (
		<div className='w-75 border-r p-4 flex flex-col'>
			<h2 className='text-lg font-bold mb-4'>Users</h2>

			<div className='flex-1 space-y-2 overflow-y-auto'>
				<UsersList />
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
