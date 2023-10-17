import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notFound";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'*',
        element: <NotFound/>
    }
])

export default routes