import { useSelector } from "react-redux";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { FaComments } from "react-icons/fa";

const Chat = () => {
	const { selectedUser } = useSelector((state) => state.user);

	if (!selectedUser) {
		return (
			<div className='flex-1 flex flex-col gap-4 items-center justify-center bg-white rounded-2xl'>
				<FaComments className='text-7xl' />
				<p>Select a user to start chatting</p>
			</div>
		);
	}

	return (
		<div className='flex-1 flex flex-col bg-white rounded-2xl '>
			<div className='flex items-center gap-2 shadow-md p-4'>
				<div className='w-8 h-8 flex items-center justify-center bg-black text-white font-bold rounded-full overflow-hidden'>
					{selectedUser.avatar ? (
						<img
							src={selectedUser.avatar}
							alt={selectedUser.name}
							className='w-full h-full object-cover'
						/>
					) : (
						<span className='text-sm'>
							{selectedUser.name?.charAt(0).toUpperCase()}
						</span>
					)}
				</div>
				<div className='text-xl font-bold'>{selectedUser.name}</div>
			</div>
			<Messages />
			<MessageInput />
		</div>
	);
};

export default Chat;
