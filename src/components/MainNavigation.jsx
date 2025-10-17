import {NavLink} from "react-router-dom";
import classes from "./styles/MainNavigation.module.css";

export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <NavLink
                        to="/admin-dashboard"
                        className={({isActive}) => isActive ? classes.active : null}
                        style={({isActive}) => ({ textAlign: isActive ? "center" : "left"  })}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/admin-dashboard/products"
                        className={({isActive}) => isActive ? classes.active : null}
                    >
                        Products
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}