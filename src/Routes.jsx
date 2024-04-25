import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Layout/Root/Root";
  
  export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
    },
  ]);