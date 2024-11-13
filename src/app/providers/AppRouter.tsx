import { AuthGuard, UnAuthGuard } from '@/features/auth/lib';
import { NotFound } from '@/pages/404';
import Inbox from '@/pages/inbox/ui/Inbox';
import SignIn from '@/pages/sign-in/ui/SignIn';
import SignUp from '@/pages/sign-up/ui/SignUp';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';

/**
 * @Todo Add error boundary
 */
export const router = createBrowserRouter([
  {
    errorElement: <NotFound />,
    children: [
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
    ],
  },
]);
