import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { RequestStatus } from '@models/request-status.model';
// import { AuthService } from '@services/auth.service';

import { CustomValidators } from '../../../../utils/validators';

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
    // private autService: AuthService
  ) {}

  register() {
    if (this.form.valid) {
      this.status = 'loading';
      const { username, email, password } = this.form.getRawValue();
      // this.autService.register(name, email, password).subscribe({
      //   next: () => {
      //     this.status = 'success';
      //     this.router.navigate(['/app/boards']);
      //   },
      //   error: () => {
      //     this.status = 'failed';
      //   },
      // });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
