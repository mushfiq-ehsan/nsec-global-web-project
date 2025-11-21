import { createBrowserRouter } from "react-router";
import HomeLayout from "../Components/HomeLayout";
import Home from "../pages/Home";
const router = createBrowserRouter([



  {
    path: "/",
    Component: HomeLayout,
    children:[
      {
        path: '/',
        Component: Home
      }
    ]
  },
]);


export default router;
