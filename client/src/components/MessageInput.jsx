import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../services/api";
import { addMessage } from "../redux/messageSlice.js";

const MessageInput = () => {
	const [text, setText] = useState("");
	const dispatch = useDispatch();
	const { selectedUser } = useSelector((state) => state.user);

	const handleSend = async (e) => {
		e.preventDefault();

		if (!text.trim()) return;

		try {
			const { data } = await API.post(`/messages/send/${selectedUser._id}`, {
				message: text,
			});

			console.log(data.data);
			dispatch(addMessage(data.data));

			setText("");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form
			onSubmit={handleSend}
			className='p-4 border-t flex gap-2'>
			<input
				type='text'
				value={text}
				onChange={(e) => setText(e.target.value)}
				className='flex-1 p-2 border rounded'
				placeholder='Type a message...'
			/>
			<button className='px-4 bg-black text-white rounded'>Send</button>
		</form>
	);
};

export default MessageInput;
