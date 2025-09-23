import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";

const router = createBrowserRouter([
    {path: '/', element: <Home /> },
    {path: '/products', element: <Products /> }
])
export default function App() {
    return <RouterProvider router={router}/>;
}
