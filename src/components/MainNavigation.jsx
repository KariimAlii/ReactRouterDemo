import {NavLink} from "react-router-dom";
import classes from "./styles/MainNavigation.module.css";

export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <NavLink
                        to="/"
                        className={({isActive}) => isActive ? classes.active : null}
                        style={({isActive}) => ({ textAlign: isActive ? "center" : "left"  })}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({isActive}) => isActive ? classes.active : null}
                    >
                        Products
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}