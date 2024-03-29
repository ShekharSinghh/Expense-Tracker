import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInIt(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.email]],
        password: ['', [Validators.required]]
      }
    )
  }

  get f(){
    return this.loginForm.controls
  }

}

