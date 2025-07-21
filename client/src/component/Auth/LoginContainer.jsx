import { useEffect, useState } from "react";
import LoginCard from "./LoginCard";
import { useNavigate } from "react-router-dom";

export default function LoginContainer() {
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    });
    const [validationErrors, setValidationErrors] = useState(null);

    async function handleLogin() {
        if( !loginForm.username || !loginForm.password) {
            setValidationErrors({
                username: !loginForm.username ? "Username is required" : "",
                password: !loginForm.password ? "Password is required" : ""
            });
            return;
        }
        setValidationErrors(null)
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <LoginCard 
            logingForm={loginForm}
            setLoginForm={setLoginForm}
            validationErrors={validationErrors}
            handleLogin={handleLogin}
        />
    );
}