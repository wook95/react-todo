import {
  queryClient,
  router,
  ThemeProvider,
  ToastProvider,
} from '@app/providers';
import '@shared/ui/styles/global.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
/*
/*
 * @TODO: 다크모드
 * @TODO: i18n
 */
const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <RouterProvider router={router} />
        </ToastProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
