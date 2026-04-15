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
		setConversations: (state, action) => {
			state.conversations = action.payload;
		},
		clearMessages: (state) => {
			state.messages = [];
			state.conversations = [];
		},
	},
});

export const { setMessages, addMessage, setConversations, clearMessages } =
	messageSlice.actions;

export default messageSlice.reducer;
