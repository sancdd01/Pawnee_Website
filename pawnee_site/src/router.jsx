import App from "./App";
import { createHashRouter, createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Department from "./pages/Department";

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
    ],
  },
]);

export default Router;
