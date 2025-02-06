import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private http = inject(HttpClient);

  signIn(email: string, password: string) {
    return this.http.post<{ message: string; token: string }>('/users/login', {
      email,
      password,
    });
  }

  signUp(email: string, password: string) {
    return this.http.post<{ message: string; token: string }>('/users/create', {
      email,
      password,
    });
  }
}
