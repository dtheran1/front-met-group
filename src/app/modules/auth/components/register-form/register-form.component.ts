import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { CustomValidators } from '../../../../utils/validators';
import { AuthService } from './../../../../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  form = this.formBuilder.nonNullable.group(
    {
      username: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(4), Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [
        CustomValidators.MatchValidator('password', 'confirmPassword'),
      ],
    }
  );
  status = 'init';
  statusUser = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  showRegister = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private autService: AuthService
  ) {}

  register() {
    if (this.form.valid) {
      this.status = 'loading';
      const { username, password } = this.form.getRawValue();
      const payload = { username, password };
      this.autService.register(payload).subscribe({
        next: () => {
          this.status = 'success';
          this.router.navigate(['/login'], {
            queryParams: {
              username,
            },
          });
        },
        error: () => {
          this.status = 'failed';
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
