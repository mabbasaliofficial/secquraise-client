import AddPerson from "../Pages/AddPerson";
import Home from "../Pages/Home";
import SingleData from "../Pages/SingleData";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../Layouts/MainLayout");

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users/:id",
        element: <SingleData />,
        loader: ({ params }) =>
          fetch(`https://server-side-data-beta.vercel.app/users/${params.id}`),
      },
      {
        path: "/add_person",
        element: <AddPerson />,
      },
    ],
  },
]);
