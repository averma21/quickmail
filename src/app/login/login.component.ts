import { Component } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)]
    ),
    passwordFormControl: new FormControl('', [
      Validators.required
    ])
  })

  get emailFormControl() {
    return this.loginForm.get('emailFormControl');
  }

  get passwordFormControl() {
    return this.loginForm.get('passwordFormControl');
  }

}
