import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/notFound";
import MainLayout from "../layouts/main";
import Home from "../pages/home";
import Category from "../pages/category";
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
        path: "/category",
        element: <Category/>,
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
