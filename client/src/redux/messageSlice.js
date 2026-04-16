import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	messages: [],
	conversation: [],
};

const messageSlice = createSlice({
	name: "message",
	initialState,
	reducers: {
		setMessages: (state, action) => {
			state.messages = action.payload;
		},
		addMessage: (state, action) => {
			state.messages.push(action.payload);
		},
		setConversation: (state, action) => {
			state.conversation = action.payload;
		},
		clearMessages: (state) => {
			state.messages = [];
			state.conversation = [];
		},
	},
});

export const { setMessages, addMessage, setConversation, clearMessages } =
	messageSlice.actions;

export default messageSlice.reducer;
