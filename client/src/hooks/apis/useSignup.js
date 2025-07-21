import { useMutation } from '@tanstack/react-query';
import { signupRequest } from '../../apis/auth';

export const useSignup = () => {
    const { isPending, isSuccess, error, mutateAsync: signupMutation } = useMutation({
        mutationFn: signupRequest,
        onSuccess: (data) => {
            console.log("Signup successful", data);
        }, 
        onError: (error) => {
            console.error("Signup failed", error);
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        signupMutation
    }
}