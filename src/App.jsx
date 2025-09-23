import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Layout from "./pages/Layout.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error/>,
        children: [
            { path: '/', element: <Home /> },
            { path: '/products', element: <Products /> }
        ]
    }
])
export default function App() {
    return <RouterProvider router={router}/>;
}
