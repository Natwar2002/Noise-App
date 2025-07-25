import { useQuery } from '@tanstack/react-query';
import useAuth from '../../store/authStore';
import { getGroupsRequest } from '../../apis/groups';

export function useGetGroups() {
    const token = useAuth(state => state.token);

    const { data: groups, isFetching, isSuccess, error } = useQuery({
        queryFn: () => getGroupsRequest(token),
        queryKey: ['groups'],
        staleTime: 0
    });

    return {
        groups,
        isFetching,
        isSuccess,
        error
    }
}
