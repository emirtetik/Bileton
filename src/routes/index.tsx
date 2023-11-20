import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/notFound";
import MainLayout from "../layouts/main";
import Home from "../pages/home";
import Category from "../pages/category";
import EventDetail from "../components/eventDetail";
import EventsByLocation from "../components/location/index";
import Calendar from "../pages/calendar";
import Events from "../pages/events";
import Venue from "../pages/venue";
import Artist from "../pages/artist";
import EventsBycategory from "../components/category/eventsByCategory";
import TicketBuy from "../components/ticketBuy";

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
        path: "/events",
        element: <Events />,
      },
      {
        path: "/venue",
        element: <Venue />,
      },
      {
        path: "/artist",
        element: <Artist />,
      },
      {
        path: "/ticket",
        element: <TicketBuy />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "location/:name",
        element: <EventsByLocation />,
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
