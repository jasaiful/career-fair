import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/errorPage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const myCreatedRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("events.json") 
            }, 
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
])

export default myCreatedRoutes;