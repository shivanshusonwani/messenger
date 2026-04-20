import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	users: [],
	selectedUser: null,
	onlineUsers: [],
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUsers: (state, action) => {
			state.users = action.payload;
		},
		setSelectedUser: (state, action) => {
			state.selectedUser = action.payload;
		},
		setOnlineUsers: (state, action) => {
			state.onlineUsers = action.payload;
		},
		clearUsers: (state) => {
			state.users = [];
			state.selectedUser = null;
			state.onlineUsers = [];
		},
	},
});

export const { setUsers, setSelectedUser, setOnlineUsers, clearUsers } =
	userSlice.actions;

export default userSlice.reducer;
