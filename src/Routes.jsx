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

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        element: <AddNewCraft />
      },
      {
        path: "/my-list",
        element: <MyCreated />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]
  },
]);