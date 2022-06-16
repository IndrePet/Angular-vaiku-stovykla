import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  public onSubmit(form: NgForm) {
    this.auth
      .register(form.value.email, form.value.password)
      .subscribe((response) => {
        console.log(response);
        this.email = '';
        this.password = '';
        this.passwordConfirm = '';
        this.router.navigate(['/']);
      });
  }
}
