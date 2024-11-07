import '@shared/ui/styles/global.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/AppRouter';
import { queryClient } from './providers/queryClient';
import { GlobalThemeProvider } from './providers/ThemeProvider';

/*
 * @TODO: 다크모드
 * @TODO: i18n
 */
const App = () => {
  return (
    <GlobalThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </GlobalThemeProvider>
  );
};

export default App;
