import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="my-5">
                <div className="bg-yellow-50 rounded-2xl w-2/4 py-8 mx-auto">
                    <h2 className="text-3xl  pt-10 text-center font-semibold">Registration Form</h2>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Full Name</span>
                            </label>
                            <input type="text" placeholder="full name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover ">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent">Register</button>
                        </div>
                    </form>
                    <p className="text-center  mt-4">Already have an account? <Link className="  font-bold" to="/login">Login</Link></p>
                </div>
            </div >
            <Footer></Footer>
        </div >
    );
};

export default Register;