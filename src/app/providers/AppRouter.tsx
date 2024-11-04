import Inbox from '@/pages/inbox/ui/Inbox';
import SignIn from '@/pages/sign-in/ui/SignIn';
import SignUp from '@/pages/sign-up/ui/SignUp';
import { localStorageKeys } from '@/shared/constant';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';

/**
 * @Todo 저스탠드에 있는 상태로 꺼내오기
 * @Todo Add error boundary
 */
const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const isAuthorized = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
  return isAuthorized ? <>{children}</> : <Navigate to="/" replace />;
};

const UnAuthGuard = ({ children }: { children: React.ReactNode }) => {
  const isAuthorized = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
  return !isAuthorized ? <>{children}</> : <Navigate to="/app/inbox" replace />;
};

/**
 * @Todo Add auth guard
 * @Todo Add error boundary
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="auth/sign-in" replace />,
  },
  {
    path: '/auth',
    element: (
      <UnAuthGuard>
        <Outlet />
      </UnAuthGuard>
    ),
    children: [
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '/app',
    element: (
      <AuthGuard>
        <Outlet />
      </AuthGuard>
    ),
    children: [
      {
        path: 'inbox',
        element: <Inbox />,
      },
    ],
  },
  {
    path: '*',
    element: <div>not found</div>,
  },
]);
