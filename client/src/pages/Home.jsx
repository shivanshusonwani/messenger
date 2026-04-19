import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
	return (
		<div className='h-screen max-w-7xl mx-auto flex'>
			<div className='w-full m-4 flex gap-4'>
				<Sidebar />
				<Chat />
			</div>
		</div>
	);
};

export default Home;
