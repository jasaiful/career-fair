import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="bg-green-800 rounded-2xl w-2/4 py-8 mx-auto">
                    <h2 className="text-3xl text-white pt-10 text-center font-semibold">Login</h2>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center text-white mt-4">Do not have an account? <Link className=" text-white font-bold" to="/register">Register</Link></p>
                </div>
            </div >
            <Footer></Footer>
        </div>
    );
};

export default Login;