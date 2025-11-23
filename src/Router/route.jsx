import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import HomeLayout from "../layout/HomeLayout";
import About from "../pages/About";
import Services from "../pages/Services";
import StudyDestinations from "../pages/StudyDestinations";
import Contact from "../pages/Contact";
const router = createBrowserRouter([



  {
    path: "/",
    Component: HomeLayout,
    children:[
      {
        path: '/',
        Component: Home,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'services',
        Component: Services
      },
      {
        path: 'study-destinations',
        Component: StudyDestinations,
      },
      {
        path: 'contact',
        Component: Contact,
      }
    ]
  },
]);


export default router;
