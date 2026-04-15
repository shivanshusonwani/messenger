import MessageInput from "./MessageInput";

const Chat = () => {
	return (
		<div className='flex-1 flex flex-col'>
			<div className='p-4 border-b font-bold'>Selected User</div>

			<div className='flex-1 p-4 overflow-y-auto space-y-2'>
				<p className='text-center text-gray-500'>No messages yet</p>
			</div>

			<MessageInput />
		</div>
	);
};

export default Chat;
