import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
	return (
		<div className='h-screen flex'>
			<Sidebar />
			<Chat />
		</div>
	);
};

export default Home;
