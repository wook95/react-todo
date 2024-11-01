import Inbox from '@/pages/inbox/ui/Inbox';
import SignIn from '@/pages/sign-in/ui/SignIn';
import SignUp from '@/pages/sign-up/ui/SignUp';
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';

const guardAuth = (children: RouteObject[]) => {
  const isAuthorized = true;

  if (!isAuthorized) return [{ path: '*', element: <Navigate to="/" /> }];

  return children;
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
    children: guardAuth([
      {
        path: 'inbox',
        element: <Inbox />,
      },
    ]),
  },
  {
    path: '*',
    element: <div>not found</div>,
  },
]);
