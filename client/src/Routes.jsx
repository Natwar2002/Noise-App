import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Home from "./pages/Home";
import Auth from "./component/Auth/Auth";
import SignupContainer from "./component/Auth/SignupContainer";
import LoginContainer from "./component/Auth/LoginContainer";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/signup" element={<Auth><SignupContainer /></Auth>} />
            <Route path="/signin" element={<Auth><LoginContainer /></Auth>} />
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}