import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from '../../../../public/logo.png'


const Footer = () => {

    const navLinks = <>
        <li>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black bg-cyan-400 underline font-semibold" : ""} to="/" >Home</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black bg-cyan-400 underline font-semibold" : ""} to="/events" >Events</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black bg-cyan-400 underline font-semibold" : ""} to="/attendees" >Attendees</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black bg-cyan-400 underline font-semibold" : ""} to="/about" >About</NavLink>
        </li>

    </>

    return (
        <div className="bg-yellow-50 rounded-xl">
            <footer className="footer footer-center p-5 text-base-content rounded">
                <div className="gap-5">
                    <img src={logo} alt="" />
                    <h2 className="text-3xl font-bold">CAREER FAIR</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <nav>
                    <div className="grid text-4xl grid-flow-col gap-4">
                        <Link><FaFacebook></FaFacebook></Link>
                        <Link> <FaYoutube></FaYoutube> </Link>
                        <Link><FaTwitter></FaTwitter></Link>
                        <Link><FaLinkedin></FaLinkedin></Link>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;