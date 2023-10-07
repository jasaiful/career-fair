import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
     

    return (
        <div className="h-screen mt-24 text-center space-y-5">
            <h2 className="text-5xl text-red-600">Oops!!!</h2>
            <p className="text-red-600">
                <i>{error.statusText || error.message}</i>
            </p>
            <p>
                Sorry, an unexpected error has occurred.
            </p>
            <Link to={"/"}>
                <button className="btn btn-secondary mt-10 btn-sm">Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;