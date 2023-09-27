import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Card from "../Pages/card/card";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const Router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout> ,
        errorElement:<ErrorPage></ErrorPage>,
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
                loader:()=>fetch("/data.json") 
            },
            {
            
                path: "/cards/:id",
                element:<Card></Card>,
                loader:()=>fetch("/data.json")
            
            }
        ]
    }
])

export default Router;