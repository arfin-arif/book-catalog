import { createBrowserRouter } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import App from "../App";
import Home from "../pages/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);

export default routes;
