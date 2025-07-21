import { Outlet } from "react-router-dom";
import NavigationBar from "../Navbar/Navbar";

export default function Layout() {
    return(
        <>
            <NavigationBar />
            <Outlet />
        </>
    );
}