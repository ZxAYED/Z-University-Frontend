import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";

import Contact from "../pages/Contact";
import About from "../pages/About";
import Register from "../pages/Register";
import { genereicRoutes } from "../utils/RoutesNavmenuGenerator";
import { adminInfo } from "./Admin.Routes";
import { facultyPaths } from "./Faculty.Routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "/admin",
    element: <App />,
    children: genereicRoutes(adminInfo),
  },
  {
    path: "/faculty",
    element: <App />,
    children: genereicRoutes(facultyPaths),
  },
]);

export default router;
