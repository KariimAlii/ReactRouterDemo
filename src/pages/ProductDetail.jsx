import {Link, useParams} from "react-router-dom";

export default function ProductDetail() {
    const params = useParams();

    const productId = params.productId;

    return (
        //! Issue : in this case the (back to index) returns you to the home page !!
        //! ".." is a relative path that resolves relative to the routes definitions
        //! relative:"route" by default (relative to the route definitions)
        //! relative:"path" (relative to the current path)
        <>
            <h1>Product {productId} Details!</h1>
            <Link to=".." relative="path">
                Back to Index
            </Link>
        </>
    )
}