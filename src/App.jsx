import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Layout from "./pages/Layout.jsx";
import Error from "./pages/Error.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

//! if a path starts with '/' => absolute path
//! Routed that don't start with '/' like: 'products' => relative path
const router = createBrowserRouter([
    {
        path: "/admin-dashboard",
        element: <Layout />,
        errorElement: <Error/>,
        children: [
            { path: '', element: <Home /> },
            { path: 'products', element: <Products /> },
            { path: 'products/:productId', element: <ProductDetail /> }
        ]
    }
])

// In case of multiple layouts you can use configure it like:
// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Layout/>,
//         errorElement: <Error/>,
//         children: [
//             { path: '/' , element: <Home/> },
//             { path: '/products' , element: <Products/> },
//         ]
//     },
//     {
//         path: '/admin-dashboard',
//         element: <Layout2/>,
//         children: [
//             { path: '/admin-dashboard/orders' , element: <Orders/> },
//         ]
//     }
// ])

export default function App() {
    return <RouterProvider router={router}/>;
}
