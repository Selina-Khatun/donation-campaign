import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Card from "../Pages/card/card";


const Router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout> ,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:()=>fetch('/data.json')
            },
            {
                path: "/Donation",
                element: <Donation></Donation>,
            },
            {
                path: "/Statistics",
                element: <Statistics></Statistics>,
            },
            {
                // path : "/phones/:id",
                // element : <Phone></Phone>,
                // loader:()=>fetch('/phones.json')

                path: "/cards/:id",
                element:<Card></Card>,
                loader:()=>fetch('/data.json')
            }
        ]
    }
])

export default Router;