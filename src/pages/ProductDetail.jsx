import {Link, useParams} from "react-router-dom";

export default function ProductDetail() {
    const params = useParams();

    const productId = params.productId;

    return (
        //! Issue : in this case the (back to index) returns you to the home page !!
        //! ".." is a relative path that resolves relative to the routes definitions
        <>
            <h1>Product {productId} Details!</h1>
            <Link to="..">
                Back to Index
            </Link>
        </>
    )
}