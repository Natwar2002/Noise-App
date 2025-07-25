import { useQuery } from '@tanstack/react-query';
import useAuth from '../../store/authStore';
import { getMessagesRequest } from '../../apis/messages';

export function useGetMessages(groupId) {
    const token = useAuth(state => state.token);
    const { data: messages, isFetching, isSuccess, error } = useQuery({
        queryFn: () => getMessagesRequest(token),
        queryKey: ['messages'],
        staleTime: 0
    });

    return {
        messages,
        isFetching,
        isSuccess,
        error
    }
}
