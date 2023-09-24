import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";


const Router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout> ,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/Donation",
                element: <Donation></Donation>,
            },
            {
                path: "/Statistics",
                element: <Statistics></Statistics>,
            }
        ]
    }
])

export default Router;