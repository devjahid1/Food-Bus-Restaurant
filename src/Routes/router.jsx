import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Reservation from "../pages/Reservation";
import Services from "../pages/Services";
import Testimonials from "../pages/Testimonials";



    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/about',
                    element: <About/>
                },
                {
                    path: '/menu',
                    element: <Menu/>
                },
                {
                    path: '/reservation',
                    element: <Reservation/>
                },
                {
                    path: '/service',
                    element: <Services/>
                },
                {
                    path: '/Testimonials',
                    element: <Testimonials/>
                }
            ]
        },

    ]);


export default router;