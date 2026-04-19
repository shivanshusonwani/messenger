import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../services/api.js";
import { setMessages } from "../redux/messageSlice.js";
import { useAuth } from "../context/AuthContext";

const Messages = () => {
	const dispatch = useDispatch();
	const { selectedUser } = useSelector((state) => state.user);
	const { messages } = useSelector((state) => state.message);
	const { user } = useAuth();

	const bottomRef = useRef();

	useEffect(() => {
		if (!selectedUser) return;

		const fetchMessages = async () => {
			try {
				const { data } = await API.get(`/messages/${selectedUser._id}`);
				dispatch(setMessages(data));
			} catch (error) {
				console.error(error);
			}
		};

		fetchMessages();
	}, [selectedUser]);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	return (
		<div className='flex-1 p-4 overflow-y-auto space-y-2'>
			{messages.length === 0 && (
				<p className='text-center pt-4 text-gray-500'>No messages yet</p>
			)}

			{messages.map((msg) => {
				const isMe = msg.senderId === user?.data?.id;

				return (
					<div
						key={msg._id}
						className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
						<div
							className={`px-3 py-2 rounded-lg max-w-[60%] ${
								isMe
									? "bg-black text-white rounded-br-none"
									: "bg-gray-200 text-black rounded-bl-none"
							}`}>
							{msg.message}
						</div>
					</div>
				);
			})}

			<div ref={bottomRef} />
		</div>
	);
};

export default Messages;
