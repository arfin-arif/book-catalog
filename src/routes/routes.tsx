import { createBrowserRouter } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import BookDetailsPage from "../pages/BookDetails/BookDetailPage";
import AllBooks from "../pages/AllBooks/AllBooks";
import AddNewBook from "../pages/AddNewBook/AddNewBook";
import EditBook from "../pages/BookDetails/EditBook";

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
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/add-new-book",
        element: <AddNewBook />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetailsPage />,
      },
      {
        path: "/edit-book/:id",
        element: <EditBook />,
      },
    ],
  },
]);

export default routes;
