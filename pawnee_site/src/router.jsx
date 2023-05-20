import App from "./App";
import { createHashRouter, createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Department from "./pages/Department";
import WorkOrders from "./components/WorkOrders";
import { getTasks } from "./utilities";
import SpotifyLogin from "./components/SpotifyLogin";
import VideoDome from "./pages/VideoDome";

const Router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <LogIn />,
      },
      {
        path: "/department",
        element: <Department />,
      },
      {
        path: "/workorders",
        element: <WorkOrders />,
        loader: getTasks,
      },
      {
        path: "/spotify",
        element: <SpotifyLogin />,
      },
      {
        path: "/videodome",
        element: <VideoDome />,
      },
      {
        path: "/error",
        element: <Error />,
      },
    ],
  },
]);

export default Router;
