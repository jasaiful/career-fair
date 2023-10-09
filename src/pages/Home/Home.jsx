import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner";
import EventCard from "./EventCard";


const Home = () => {
    const events = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>

            <Banner></Banner>
            <h2 className="text-4xl text-center font-bold mt-10 mb-5">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                {
                    events.map(event => <EventCard
                        key={event.id}
                        event={event}
                    ></EventCard>)
                }
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;
