import { AuthGuard, UnAuthGuard } from '@/features/auth/lib';
import { NotFound } from '@/pages/404';
import Inbox from '@/pages/inbox/ui/inbox';
import SignIn from '@/pages/sign-in/ui/sign-in';
import SignUp from '@/pages/sign-up/ui/sign-up';
import { ErrorFallback } from '@/shared/ui';
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    errorElement: <NotFound />,
    element: (
      <ErrorBoundary
        fallbackRender={({ error }) => <ErrorFallback error={error} />}
      >
        <Outlet />
      </ErrorBoundary>
    ),
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
