import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardHome from "../Pages/DashboardPages/DashboardHome/DashboardHome";
import Tasks from "../Pages/DashboardPages/Tasks/Tasks";
import ToDo from "../Pages/DashboardPages/ToDo/ToDo";
import Ongoing from "../Pages/DashboardPages/ToDo/Ongoing";
import Completed from "../Pages/DashboardPages/ToDo/Completed";
import ErrorPage from "../Pages/Error/ErrorPage";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard/home',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: '/dashboard/tasks',
                element: <Tasks></Tasks>
            },
            {
                path: '/dashboard/tasks/todo',
                element: <ToDo></ToDo>
            },
            {
                path: '/dashboard/tasks/ongoing',
                element: <Ongoing></Ongoing>
            },
            {
                path: '/dashboard/tasks/completed',
                element: <Completed></Completed>
            }
        ]
    }
])

export default Router;