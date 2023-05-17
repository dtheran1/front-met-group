import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { CustomValidators } from '../../../../utils/validators';
import { AuthService } from './../../../../services/auth.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
})
export class CreateStoreComponent {
  form = this.formBuilder.nonNullable.group(
    {
      name: ['', [Validators.required]],
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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private storeService: StoreService
  ) {}

  createStore() {
    if (this.form.valid) {
      this.status = 'loading';
      const { name } = this.form.getRawValue();
      console.log(name);

      this.storeService.createStore(name).subscribe({
        next: () => {
          this.status = 'success';
          this.router.navigate(['/app']);
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
