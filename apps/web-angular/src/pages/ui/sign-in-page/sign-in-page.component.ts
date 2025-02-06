import { AuthApiService } from '@/entities/auth/api';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

@Component({
  imports: [HlmInputDirective, HlmButtonDirective, ReactiveFormsModule],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.scss',
})
export class SignInPageComponent {
  private authApiService = inject(AuthApiService);
  private router = inject(Router);

  public form = new FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }>({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  public signIn() {
    this.authApiService
      .signIn(this.form.value.email ?? '', this.form.value.password ?? '')
      .subscribe((res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/inbox']);
        this.form.reset();
      });
  }

  public navigateToSignUp() {
    this.router.navigate(['/sign-up']);
  }
}
