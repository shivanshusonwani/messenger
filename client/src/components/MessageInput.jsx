import { useState } from "react";

const MessageInput = () => {
	const [text, setText] = useState("");

	const handleSend = async (e) => {
		e.preventDefault();

		console.log(text);
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
