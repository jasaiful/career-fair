import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const Register = () => {
    const { createUser } = useContext(AuthContext)
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleCreateUser = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        console.log(name, email, password);

        if (!/^(?=.*[A-Z])(?=.*\W)(?!.* ).{6,}$/.test(password)) {
            setError("Minium 6 characters, at least one uppercase & at least one special character");
        }
        else {
            setError("");
            if (email, password) {
                createUser(email, password)
                    .then(result => {
                        console.log(result.user)
                        setError("");
                    })
                    .catch(error => {
                        setError(error.message)
                    })
            }
        }
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="my-5">
                <div className="bg-yellow-50 rounded-2xl w-2/4 py-8 mx-auto">
                    <h2 className="text-3xl  pt-10 text-center font-semibold">Registration Form</h2>
                    <form onSubmit={handleCreateUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Full Name</span>
                            </label>
                            <input type="text" name="name" placeholder="full name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover ">Forgot password?</a>
                            </label>
                        </div>
                        <p className="text-red-600">{error}</p>
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