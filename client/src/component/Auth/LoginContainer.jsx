import { useEffect, useState } from "react";
import LoginCard from "./LoginCard";
import { useNavigate } from "react-router-dom";
import { useSignin } from '../../hooks/apis/useSignin';

export default function LoginContainer() {
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    });
    const [validationErrors, setValidationErrors] = useState(null);
    const { isPending, isSuccess, error, signinMutation } = useSignin();

    async function handleLogin() {  
        if( !loginForm.username || !loginForm.password) {
            setValidationErrors({
                username: !loginForm.username ? "Username is required" : "",
                password: !loginForm.password ? "Password is required" : ""
            });
            return;
        }
        setValidationErrors(null);
        try {
            await signinMutation(loginForm);
        } catch (error) {
            console.error("Login error:", error);
            setValidationErrors({ general: "Login failed. Please try again." });    
        }
    }

    useEffect(() => {
        let timer;
        if (isSuccess) {
            timer = setTimeout(() => {
            navigate("/");
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [navigate, isSuccess]);

    return (
        <LoginCard 
            loginForm={loginForm}
            setLoginForm={setLoginForm}
            validationErrors={validationErrors}
            handleLogin={handleLogin}
            isPending={isPending}
            isSuccess={isSuccess}
            error={error}
        />
    );
}