import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Services from "../pages/Services";
import Mdishes from "../components/Mdishes";
import Fastfood from "../components/Fastfood";
import Thaidish from "../components/Thaidish";
import RiceDish from "../components/RiceDish";
import ContactForm from "../components/ContactForm";
import Management from "../pages/Management";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: () => fetch("/maindish.json"),
        children: [
          {
            path: "main_dishes",
            element: <Mdishes />,
            loader: () => fetch("/maindish.json"),
          },

          {
            path: "fast_food",
            element: <Fastfood />,
            loader: () => fetch("/fastFood.json"),
          },
          {
            path: "rice_dish",
            element: <RiceDish />,
            loader: () => fetch("/riceDish.json",)
          },
          {
            path: "thai",
            element: <Thaidish />,
            loader: ()=> fetch('/thai.json')
          },
        ],
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/management",
        element: <Management/>,
      },
      {
        path: "/contact",
        element:<ContactForm/>
      }
    ],
  },
]);

export default router;
