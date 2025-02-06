import { inject, Injectable } from '@angular/core';
import { AuthApiService } from '@/entities/auth/api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authApiService = inject(AuthApiService);
  private router = inject(Router);

  public signIn(email: string, password: string) {
    this.authApiService.signIn(email ?? '', password ?? '').subscribe((res) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', email);
      this.router.navigate(['/inbox']);
    });
  }

  public signUp(email: string, password: string) {
    this.authApiService.signUp(email ?? '', password ?? '').subscribe((res) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', email);
      this.router.navigate(['/inbox']);
    });
  }

  public signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/sign-in']);
  }
}
