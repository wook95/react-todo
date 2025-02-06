import { AuthApiService } from '@/entities/auth/api/auth-api.service';
import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

@Component({
  selector: 'app-sign-up-page',
  imports: [HlmInputDirective, HlmButtonDirective, ReactiveFormsModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss',
})
export class SignUpPageComponent {
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

  public signUp() {
    this.authApiService
      .signUp(this.form.value.email ?? '', this.form.value.password ?? '')
      .subscribe((res) => {
        console.log(res);
        this.form.reset();
      });
  }

  public navigateToSignIn() {
    this.router.navigate(['/sign-in']);
  }
}
