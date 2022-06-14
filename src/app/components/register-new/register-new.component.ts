import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-new',
  templateUrl: './register-new.component.html',
  styleUrls: ['./register-new.component.css'],
})
export class RegisterNewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public registrationSubmit(form: NgForm) {
    console.log('Forma išsiųsta');
    console.log(form.form.value);
  }
}
