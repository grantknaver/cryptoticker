
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Services
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  cancelIcon = faTimes;
  loginForm: FormGroup;
  loginError = false;
  email = '';
  password = '';
  constructor(
    private router: Router,
    private authService: AuthService,
    private dialogRef: MatDialogRef<LoginDialogComponent>
  ) { }

  /**
   * Init login form
   *
   * @memberof LoginDialogComponent
   */
  initForm() {
    this.loginForm = new FormGroup({
        'email': new FormControl('', [Validators.required, Validators.email]),
        'password': new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.initForm();
  }

  /**
   * Login user
   *
   * @memberof LoginDialogComponent
   */
  onLogin() {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;
    this.authService.signinUser(email, password);
    this.dialogRef.close();
  }

  /**
   * Fires recover password process
   *
   * @memberof LoginDialogComponent
   */
  onRecoverPassword() {
    console.log('onRecoverPassword() fires');
  }

  /**
   * Takes to register page
   *
   * @memberof LoginDialogComponent
   */
  onRegister() {
    console.log('onRegister() fires');
    this.router.navigate(['register']);
    this.dialogRef.close();
  }


}
