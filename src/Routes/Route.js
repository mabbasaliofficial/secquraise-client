import RightSideNav from "../Components/RightSideNav";
import Home from "../Pages/Home";
import SingleData from "../Pages/SingleData";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../Layouts/MainLayout");

export const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/data/:id',
                element: <SingleData/>,
                loader: ({params}) => fetch(`http://localhost:5000/data/${params.id}`)
                
            }
        ]

    }
])