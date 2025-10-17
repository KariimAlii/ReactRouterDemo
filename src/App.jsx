import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Layout from "./pages/Layout.jsx";
import Error from "./pages/Error.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

//! if a path starts with '/' => absolute path
//! Routed that don't start with '/' like: 'products' => relative path
//!
//! Index route represents the default route if there is no sub-route and currently the path is active
const router = createBrowserRouter([
    {
        path: "/admin-dashboard",                           //! level 1
        element: <Layout />,
        errorElement: <Error/>,
        children: [
            { index: true, element: <Home /> },               //! level 2
            { path: 'products', element: <Products /> },   //! level 2
            { path: 'products/:productId', element: <ProductDetail /> }  //! level 2
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
