import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAuth } from "./AuthContext";
import { useDispatch } from "react-redux";
import { setOnlineUsers } from "../redux/userSlice";
import { addMessage } from "../redux/messageSlice";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
	const { user } = useAuth();
	const dispatch = useDispatch();
	const [socket, setSocket] = useState(null);

	useEffect(() => {
		// console.log(user?.data?.id);

		if (!user?.data?.id) return;

		const newSocket = io("http://localhost:8000", {
			query: {
				userId: user?.data?.id,
			},
			withCredentials: true,
		});

		console.log("Connecting with user:", user?.data?.id);

		setSocket(newSocket);

		// join
		newSocket.emit("join", user?.data?.id);

		// online users
		newSocket.on("getOnlineUsers", (users) => {
			console.log("Online users:", users);
			dispatch(setOnlineUsers(users));
		});

		// receive message
		newSocket.on("newMessage", (message) => {
			dispatch(addMessage(message));
		});

		return () => newSocket.close();
	}, [user]);

	return (
		<SocketContext.Provider value={{ socket }}>
			{children}
		</SocketContext.Provider>
	);
};

export const useSocket = () => useContext(SocketContext);
