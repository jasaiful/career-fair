import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/errorPage';

const myCreatedRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home> 
            }
        ]
    },
])

export default myCreatedRoutes;