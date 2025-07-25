import { useQuery } from '@tanstack/react-query';
import useAuth from '../../store/authStore';
import { getDMsRequest } from '../../apis/dms/index';


export function useGetDms() {
    const token = useAuth(state => state.token);

    const { data: dms, isFetching, isSuccess, error } = useQuery({
        queryFn: () => getDMsRequest(token),
        queryKey: ['messages'],
        staleTime: 0
    });

    return {
        dms,
        isFetching,
        isSuccess,
        error
    }
}
