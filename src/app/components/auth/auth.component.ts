import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  public email: string = '';
  public password: string = '';
  public passwordConfirm: string = '';

  public error: string = '';
  public loginMode = true;

  private onResponseError = (response: any) => {
    switch (response.error.error.message) {
      case 'EMAIL_EXISTS':
        this.error = 'Toks email egzistuoja';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        this.error = 'Per daug bandymų';
        break;
      case 'WEAK_PASSWORD : Password should be at least 6 characters':
        this.error = 'Slaptažodis turi būti ne trumpesnis nei 6 simboliai';
        break;
      case 'EMAIL_NOT_FOUND':
        this.error = 'Nurodytas el. paštas nerastas';
        break;
      case 'INVALID_PASSWORD':
        this.error = 'Nurodytas slaptažodis neteisingas';
        break;
    }
  };

  private onResponseSuccess = (response: User) => {
    this.router.navigate(['/']);
  };

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  public onSubmit(form: NgForm) {
    if (this.loginMode) {
      this.auth.login(form.value.email, form.value.password).subscribe({
        next: this.onResponseSuccess,
        error: this.onResponseError,
      });
    } else {
      this.auth.register(form.value.email, form.value.password).subscribe({
        next: this.onResponseSuccess,
        error: this.onResponseError,
      });
    }
  }
}
