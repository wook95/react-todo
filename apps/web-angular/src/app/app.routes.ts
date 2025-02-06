import { SignInPageComponent, SignUpPageComponent } from '@/pages/ui';
import { InboxComponent } from '@/pages/ui/inbox/inbox.component';
import { authGuard } from '@/entities/auth/model';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInPageComponent,
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent,
  },
  {
    path: 'inbox',
    component: InboxComponent,
    canActivate: [authGuard],
    data: { authGuardRedirect: '/sign-in' },
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'sign-in',
  },
];
