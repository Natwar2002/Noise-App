import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupCard from "./SignupCard";
import { useSignup } from "../../hooks/apis/useSignup";

export default function SignupContainer() {
    const navigate = useNavigate();
    const [signupForm, setSignupForm] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        email: ""
    });
    const [validationErrors, setValidationErrors] = useState(null);

    const { isPending, isSuccess, error, signupMutation } = useSignup();

    async function handleSignup() {
        console.log("Signup Form Data:", signupForm);
        // if (!signupForm.username || !signupForm.password || !signupForm.confirmPassword || !signupForm.firstName || !signupForm.lastName || !signupForm.email) {
        //     setValidationErrors({
        //         firstName: !signupForm.firstName ? "First Name is required" : "",
        //         lastName: !signupForm.lastName ? "Last Name is required" : "",
        //         email: !signupForm.email ? "Email is required" : "",
        //         username: !signupForm.username ? "Username is required" : "",
        //         password: !signupForm.password ? "Password is required" : "",
        //         confirmPassword: !signupForm.confirmPassword ? "Confirm Password is required" : ""
        //     });
        //     return;
        // }
        if (signupForm.password !== signupForm.confirmPassword) {
            setValidationErrors({ confirmPassword: "Passwords do not match" });
            return;
        }
        setValidationErrors(null);
        // eslint-disable-next-line no-unused-vars
        const { confirmPassword, ...signupData } = signupForm;
        try {
            await signupMutation(signupData);
        } catch (err) {
            console.error("Signup error:", err);
            setValidationErrors({ general: "Signup failed. Please try again." });
        }
    }

    useEffect(() => {
        setTimeout(() => {
            if (isSuccess) {
                navigate("/");
            }
        }, 1000);
    }, [navigate, isSuccess]);

    return (
        <SignupCard 
            signupForm={signupForm}
            setSignupForm={setSignupForm}
            validationErrors={validationErrors}
            handleSignup={handleSignup}
            isPending={isPending}
            error={error}
            isSuccess={isSuccess}
        />
    );
}