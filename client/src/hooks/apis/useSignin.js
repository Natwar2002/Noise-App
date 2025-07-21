import { useMutation } from "@tanstack/react-query";
import { signinRequest } from "../../apis/auth";

export const useSignin = () => {
    const { isPending, isSuccess, error, mutateAsync: signinMutation } = useMutation({
        mutationFn: signinRequest,
        onSuccess: (data) => {
            console.log("Signin successful", data);
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