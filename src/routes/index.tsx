import React from "react";
import { createBrowserRouter } from "react-router-dom";
const NotFound = React.lazy(()=> import("../pages/notFound")) ;
const MainLayout = React.lazy(()=> import("../layouts/main")) ;
const Home = React.lazy(()=> import("../pages/home")) ;
const Category = React.lazy(()=> import("../pages/category")) ;
const EventDetail = React.lazy(() => import('../components/eventDetail'));
const TicketBuy = React.lazy(() => import('../components/Detail/ticketBuy'));
const EventsByLocation = React.lazy(() => import("../components/Detail/location"))
const Calendar = React.lazy(() =>import("../pages/calendar"));
const Events = React.lazy(() => import("../pages/events"));
const Venue = React.lazy(() => import("../pages/venue"));
const Artist = React.lazy(()=> import("../pages/artist")) ;
const EventsBycategory = React.lazy(()=> import("../components/category/eventsByCategory")) ;
const EventsByArtist = React.lazy(()=> import("../components/Detail/artist/eventsByArtist")) ;
const EventsByVenue = React.lazy(()=> import("../components/Detail/venue")) ;

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <MainLayout />
      </React.Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: "/events",
        element: (
          <React.Suspense fallback={<div>Loading...</div>} > 
            <Events />
          </React.Suspense>
        ),
      },
      {
        path: "/venue",
        element: (
          <React.Suspense fallback={<div>Loading...</div>} >
            <Venue />
          </React.Suspense>
        ),
      },
      {
        path: "/artist",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Artist />
          </React.Suspense>
        ),
      },
      {
        path: "/category",
        element: (
          <React.Suspense fallback={<div>Loading...</div>} >
            <Category />
          </React.Suspense>
        ),
      },
      {
        path: "/calendar",
        element: (
          <React.Suspense fallback={<div>Loading...</div>} >
            <Calendar />
          </React.Suspense>
        ),
      },
      {
        path: "event/:name",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <EventDetail />
          </React.Suspense>
        ),
      },
      {
        path: "/ticket/:name",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <TicketBuy />
          </React.Suspense>
        ),
      },
      {
        path: "location/:name",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <EventsByLocation/>
          </React.Suspense>
        ),
      },
      {
        path: "category/:name",
        element: (
          <React.Suspense fallback={<div>Loading...</div>} >
            <EventsBycategory />
          </React.Suspense>
        ),
      },
      {
        path: "artist/:name",
        element: (
          <React.Suspense fallback={<div>Loading...</div>} >
            <EventsByArtist />
          </React.Suspense>
        ),
      },
      {
        path: "venue/:name",
        element: (
          <React.Suspense fallback={<div>Loading...</div>} >
            <EventsByVenue />
          </React.Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <React.Suspense fallback={<div>Loading...</div>} >
            <NotFound />
          </React.Suspense>
        ),
      },
    ],
  },
]);

export default routes;
