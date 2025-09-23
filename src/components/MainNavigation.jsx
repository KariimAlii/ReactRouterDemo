import {Link} from "react-router-dom";

export default function MainNavigation() {
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                </ul>
            </nav>
        </header>
    )
}