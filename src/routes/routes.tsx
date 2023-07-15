import { createBrowserRouter } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import BookDetailsPage from "../pages/BookDetails/BookDetailPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Registration></Registration>,
      },
      {
        path: "/book-details/:id",
        element: <BookDetailsPage />,
      },
    ],
  },
]);

export default routes;
