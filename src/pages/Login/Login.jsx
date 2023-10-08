import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn= () => {
        googleSignIn()
        .then(result => {
            console.log(result.user)
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="my-5">
                <div className="bg-yellow-50 rounded-2xl w-2/4 py-8 mx-auto">
                    <h2 className="text-3xl text-center font-semibold">Login</h2>
                    <form className="card-body">
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center  mt-4">Do not have an account? <Link className="  font-bold" to="/register">Register</Link></p>
                    <div className="form-control px-8 mt-6">
                        <button onClick={handleGoogleSignIn} className="btn btn-outline"> <FaGoogle></FaGoogle> Login in with <span className=" text-xl font-bold">Google</span></button>
                    </div>
                </div>
            </div >
            <Footer></Footer>
        </div>
    );
};

export default Login;