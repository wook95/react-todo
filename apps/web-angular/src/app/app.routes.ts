import { SignInPageComponent, SignUpPageComponent } from '@/pages/ui';
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
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
];
