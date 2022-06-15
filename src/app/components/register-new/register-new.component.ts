import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-new',
  templateUrl: './register-new.component.html',
  styleUrls: ['./register-new.component.css'],
})
export class RegisterNewComponent implements OnInit {
  constructor(
    private registrationService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public registrationSubmit(form: NgForm) {
    this.registrationService.addRegistration(form.form.value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
