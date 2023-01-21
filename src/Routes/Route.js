const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../Layouts/MainLayout");

export const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,

    }
])