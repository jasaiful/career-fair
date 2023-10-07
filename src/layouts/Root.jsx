import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Outlet></Outlet>
            <h2 className="text-center text-4xl">Assignment 9</h2>
        </div>
    );
};

export default Root;