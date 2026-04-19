import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../context/AuthContext";
import UsersList from "./UsersList";
import API from "../services/api";
import { setConversation } from "../redux/messageSlice";
import { BiLogOut } from "react-icons/bi";
import { toast } from "react-hot-toast";

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

	const handleLogout = () => {
		logout();
		toast.success("You are Logged out, Please Login to continue!");
	};

	return (
		<div className='w-75 bg-white rounded-2xl p-4 flex flex-col'>
			<h2 className='text-lg font-bold mb-4'>Users</h2>

			<div className='flex-1 overflow-y-auto'>
				<UsersList />
			</div>

			<button
				onClick={handleLogout}
				className='w-fit px-3 py-1 flex justify-center items-center gap-2 bg-black text-white rounded-xl cursor-pointer mt-3'>
				<BiLogOut className='text-lg' />
				Logout
			</button>
		</div>
	);
};

export default Sidebar;
