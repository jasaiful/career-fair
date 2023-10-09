import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
    const { id, title, venue, picture, date, time } = event;
    return (
        <div>
            <div className="card card-compact w-full bg-yellow-50 shadow-xl">
                <figure><img className="rounded-t-lg w-full" src={picture} alt="Event" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <h2 className="card-title text-2xl font-bold">Venue: {venue}</h2>
                    <div className="flex font-lg text-blue-600 text-xl">
                        <p className="">Date: {date}</p>
                        <p className="text-end">Time: {time}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/event/${id}`}><button className="btn btn-accent">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

EventCard.propTypes = {
    event: PropTypes.node.isRequired
}

export default EventCard;