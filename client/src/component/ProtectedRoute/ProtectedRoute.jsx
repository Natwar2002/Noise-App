import useAuth from '../../store/authStore';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
    const user = useAuth((state) => state.user);
    const token = useAuth((state) => state.token);
    const location = useLocation();

    const isAuthenticated = user && token;

    if(location.pathname === '/') {
        return isAuthenticated ? <Navigate to='/chats' replace /> : <Navigate to='/home' replace />
    }

    if (!isAuthenticated) {
        return <Navigate to="/home" replace />;
    } 

    return children;
}