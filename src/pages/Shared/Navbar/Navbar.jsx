import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../public/logo.png'




const Navbar = () => {

    const navLinks = <>
        <li>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black bg-pink-500 underline font-semibold" : ""} to="/" >Home</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black bg-pink-500 underline font-semibold" : ""} to="/events" >Events</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black bg-pink-500 underline font-semibold" : ""} to="/attendees" >Attendees</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black bg-pink-500 underline font-semibold" : ""} to="/about" >About</NavLink>
        </li>

    </>

    return (
        <div className='bg-yellow-50 rounded-xl'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;