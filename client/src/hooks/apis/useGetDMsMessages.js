import { useQuery } from '@tanstack/react-query';
import useAuth from '../../store/authStore';
import { getDMsMessagesRequest } from '../../apis/messages';

export function useGetDMsMessages(dm, options) {
    const token = useAuth(state => state.token);
    const limit = 20;
    const offset = 1;
    
    const { data: messages, isFetching, isSuccess, error } = useQuery({
        queryFn: () => getDMsMessagesRequest({ token, dm,  limit, offset }),
        queryKey: ['dm-messages'],
        staleTime: 0,
        enabled: !!dm,
        ...options
    });

    return {
        messages,
        isFetching,
        isSuccess,
        error
    }
}