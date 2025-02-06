import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (!token) {
    const redirectUrl = route.data['authGuardRedirect'] || '/sign-in';
    router.navigate([redirectUrl]);
    return false;
  }

  return true;
};
