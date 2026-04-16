import { useSelector } from "react-redux";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const Chat = () => {
	const { selectedUser } = useSelector((state) => state.user);

	if (!selectedUser) {
		return (
			<div className='flex-1 flex items-center justify-center'>
				<p>Select a user to start chatting</p>
			</div>
		);
	}

	return (
		<div className='flex-1 flex flex-col'>
			<div className='p-4 border-b font-bold'>{selectedUser.name}</div>
			<Messages />
			<MessageInput />
		</div>
	);
};

export default Chat;
