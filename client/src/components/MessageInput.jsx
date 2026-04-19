import { useState } from "react";
import { useSocket } from "../context/SocketContext";
import { useDispatch, useSelector } from "react-redux";
import API from "../services/api";
import { addMessage } from "../redux/messageSlice.js";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoSend } from "react-icons/io5";

const MessageInput = () => {
	const [text, setText] = useState("");

	const { socket } = useSocket();
	const dispatch = useDispatch();
	const { selectedUser } = useSelector((state) => state.user);

	const handleSend = async (e) => {
		e.preventDefault();

		if (!text.trim()) return;

		try {
			const { data } = await API.post(`/messages/send/${selectedUser._id}`, {
				message: text,
			});

			// console.log(data.data);
			dispatch(addMessage(data.data));

			socket.emit("sendMessage", {
				receiverId: selectedUser._id,
				message: data,
			});

			setText("");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form
			onSubmit={handleSend}
			className='p-4 flex gap-2'>
			<input
				type='text'
				value={text}
				onChange={(e) => setText(e.target.value)}
				className='flex-1 px-4 py-2 text-sm bg-gray-200 rounded-3xl outline-none'
				placeholder='Type a message...'
			/>
			<button className='px-2 w-16 text-lg flex items-center justify-center bg-black text-white rounded-3xl cursor-pointer'>
				<IoSend />
			</button>
		</form>
	);
};

export default MessageInput;
