import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  Validators,
  FormBuilder } from '@angular/forms';

// Services
import { AuthService } from '../auth/auth.service';

// Validators
import { RegistrationValidator } from '../shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, DoCheck {
  registerFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  registerError = false;
  email = '';
  password = '';
  repeatPassword = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.passwordFormGroup = this.formBuilder.group({
      // password: ['', [Validators.required, Validators.pattern('^[a-z0-9_-]{8,15}$')]],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    }, {
      validator: RegistrationValidator.validatePassword.bind(this)
    });
    this.registerFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      passwordFormGroup: this.passwordFormGroup
    });
  }

  ngOnInit() {
    console.log('IT WOKRS!!!!');
  }

  ngDoCheck() {
    this.password = this.passwordFormGroup.controls.password.value;
    this.repeatPassword = this.passwordFormGroup.controls.repeatPassword.value;
  }

  /**
   * Submits register form
   *
   * @memberof RegisterComponent
   */
  onSubmit() {
    const submittedEmail = this.registerFormGroup.controls.email.value;
    const submittedPassword = this.passwordFormGroup.controls.password.value;
    this.authService.signupUser(submittedEmail, submittedPassword);
    this.router.navigate(['../'], {relativeTo : this.route});
  }



}

