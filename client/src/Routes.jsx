import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Home from "./pages/Home";
import Auth from "./component/Auth/Auth";
import SignupContainer from "./component/Auth/SignupContainer";
import LoginContainer from "./component/Auth/LoginContainer";
import ProtectedRoute from "./component/ProtectedRoute/ProtectedRoute";
import ChatLayout from "./pages/Chats/ChatLayout";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<ProtectedRoute />} />

            <Route path="/signup" element={<Auth><SignupContainer /></Auth>} />
            <Route path="/signin" element={<Auth><LoginContainer /></Auth>} />

            <Route path="/" element={<Layout />} >
                <Route path="home" element={<Home />} />
                <Route path="chats" element={<ProtectedRoute><ChatLayout /></ProtectedRoute>} />
            </Route>
        </Routes>
    )
}
