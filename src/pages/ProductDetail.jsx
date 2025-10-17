import {useParams} from "react-router-dom";

export default function ProductDetail() {
    const params = useParams();

    const productId = params.productId;

    return <h1>Product {productId} Details!</h1>
}