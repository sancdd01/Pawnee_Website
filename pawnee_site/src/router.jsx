import App from "./App";
import { createHashRouter, createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";

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
    ],
  },
]);

export default Router;
