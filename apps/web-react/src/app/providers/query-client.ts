import { QueryClient } from '@tanstack/react-query';
import { ZodError } from 'zod';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 1000 * 60 * 5,
      throwOnError:
        import.meta.env.MODE === 'production'
          ? (error) => error instanceof ZodError
          : true,
    },
    mutations: {
      throwOnError:
        import.meta.env.MODE === 'production'
          ? (error) => error instanceof ZodError
          : true,
    },
  },
});
