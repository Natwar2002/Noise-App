import { useQuery } from '@tanstack/react-query';
import useAuth from '../../store/authStore';
import { getGroupMessagesRequest } from '../../apis/messages';
import useChatStore from '../../store/chatStore';

export function useGetGroupMessages() {
    const token = useAuth(state => state.token);
    const selectedChat = useChatStore(state => state?.selectedChat);
    const limit = 20;
    const offset = 1;

    const group = selectedChat?._id;
    
    const { data: messages, isFetching, isSuccess, error } = useQuery({
        queryFn: () => getGroupMessagesRequest({ token, group, limit, offset }),
        queryKey: ['group-messages'],
        staleTime: 0
    });

    return {
        messages,
        isFetching,
        isSuccess,
        error
    }
}
