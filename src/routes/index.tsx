import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/notFound";
import MainLayout from "../layouts/main";
import Home from "../pages/home";
import Lists from "../pages/lists";

const routes = createBrowserRouter([
  {
    path: "/",
    // element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/lists",
        element: <Lists />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
