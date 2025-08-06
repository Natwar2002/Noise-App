import AppRoutes from './Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useAuth from './store/authStore';
import { useEffect } from 'react';

function App() {
  const queryClient = new QueryClient();
  const initializeAuth = useAuth(state => state.initializeAuth);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  )
}

export default App