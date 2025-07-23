import { useMutation } from "@tanstack/react-query";
import { signinRequest } from "../../apis/auth";
import useAuth from '../../store/authStore';

export const useSignin = () => {
    const setAuth = useAuth(state => state.setAuth)
    const { isPending, isSuccess, error, mutateAsync: signinMutation } = useMutation({
        mutationFn: signinRequest,
        onSuccess: (data) => {
            console.log("Signin successful");
            setAuth(data, data?.token);
        },
        onError: (error) => {
            console.error("Signin failed", error);
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        signinMutation
    }
}