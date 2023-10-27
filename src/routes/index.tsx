import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/notFound";
import MainLayout from "../layouts/main";
import Home from "../pages/home";
import Lists from "../pages/lists";
import EventsBycategory from "../components/category/eventsByCategory";
import EventDetail from "../components/eventDetail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        path: "category/:name",
        element: <EventsBycategory />,
      },
      {
        path: "event/:name",
        element: <EventDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
