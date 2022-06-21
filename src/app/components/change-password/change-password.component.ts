import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  public password: string = '';
  public passwordConfirm: string = '';

  public error: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  public onSubmit(form: NgForm) {
    this.auth.changePassword(form.value.password).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
