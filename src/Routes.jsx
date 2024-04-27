import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Layout/Root/Root";
import Homepage from "./Layout/Homepage/Homepage";
import AllList from "./Layout/Homepage/AllList";
import AddNewCraft from "./Layout/Homepage/AddNewCraft";
import MyList from "./Layout/Homepage/MyList";
import Login from "./Layout/LoginRegister/Login";
import Register from "./Layout/LoginRegister/Register";
  
  export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path:"/",
            element:<Homepage/>
        },
        {
            path:"/all-list",
            element:<AllList/>
        },
        {
            path:"/add-new",
            element:<AddNewCraft/>
        },
        {
            path:"/my-list",
            element:<MyList/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/register",
            element:<Register/>
        },
      ]
    },
  ]);