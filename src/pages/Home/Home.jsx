import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h2 className="text-4xl text-center font-bold">Upcoming Events</h2>
            <div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;