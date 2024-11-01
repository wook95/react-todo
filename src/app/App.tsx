import '@shared/ui/styles/global.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/AppRouter';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
