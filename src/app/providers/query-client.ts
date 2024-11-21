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
      throwOnError: (error) => error instanceof ZodError,
    },
    mutations: {
      throwOnError: (error) => error instanceof ZodError,
    },
  },
});
