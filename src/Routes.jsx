import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "./Layout/Root/Root";
import Homepage from "./Layout/Homepage/Homepage";
import Login from "./Layout/LoginRegister/Login";
import Register from "./Layout/LoginRegister/Register";
import AllCraft from "./Layout/AllCraftList/AllCraft";
import AddNewCraft from "./Layout/AddNewCraft/AddNewCraft";
import MyCreated from "./Layout/MyCraft/MyCreated";
import ErrorPage from "./Layout/ErrorPage/ErrorPage";
import Details from "./Layout/Details/Details";
import PrivateRoute from "./Layout/PrivateRoute/PrivateRoute";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/all-list",
        element: <AllCraft />
      },
      {
        path: "/add-new",
        element: <PrivateRoute><AddNewCraft /></PrivateRoute>
      },
      {
        path: "/my-list",
        element: <PrivateRoute><MyCreated /></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/details/:craftId",
        element: <PrivateRoute><Details /></PrivateRoute>
      },
      {
        path: "/update/:craftId",
        element: <PrivateRoute><AddNewCraft /></PrivateRoute>
      },
    ]
  },
]);