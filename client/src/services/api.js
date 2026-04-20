import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const API = axios.create({
	baseURL: `${baseURL}/api`,
	withCredentials: true,
});

export { baseURL };
export default API;
