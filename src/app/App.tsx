import { light } from '@/shared/ui/styles/theme.css';
import '@shared/ui/styles/global.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/AppRouter';

/*
 * @TODO: 다크모드
 */
const App = () => {
  return (
    <div className={light}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
