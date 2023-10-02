import { createBrowserRouter } from "react-router-dom";
import Homescreen from "../Pages/Homescreen";
import { Layout } from "../Common/Layout";
import Mutiple from "../Pages/Mutilple";
import { Ecommerce } from "../Pages/Ecommerce";

export const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Mutiple />,
      },
      {
        path: "/detail/:productID",
        element: <Ecommerce />,
      },
    ],
  },
]);
