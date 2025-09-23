import {Outlet} from "react-router-dom";
import MainNavigation from "../components/MainNavigation.jsx";
import classes from "./styles/Layout.module.css";

export default function Layout() {
    return (
        <>
            <MainNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>

        </>
    )
}