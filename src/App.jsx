import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";

const routeDefinitions = createRoutesFromElements(
    <Route>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
    </Route>
)
const router = createBrowserRouter(routeDefinitions);

// const router = createBrowserRouter([
//     {path: '/', element: <Home /> },
//     {path: '/products', element: <Products /> }
// ])
export default function App() {
    return <RouterProvider router={router}/>;
}
