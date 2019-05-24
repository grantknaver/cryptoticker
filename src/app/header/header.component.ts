import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

// Components
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

// Services
import { AuthService  } from '../auth/auth.service';

/**
 * Component which contains the header for the PetStore App
 *
 * @export
 * @class HeaderComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  name = 'Grant Knaver';
  logoPic = './assets/logo.png';
  desktop = true;
  open = false;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.desktop = window.innerWidth <= 550 ? false : true;
  }

  onHome() {
    this.router.navigate(['']);
  }

  onCoins() {
    this.router.navigate(['cryptolist']);
  }

  onRegister() {
    this.router.navigate(['register']);
  }

  onLogin() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '400px',
      height: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onOpen() {
    this.open = !this.open;
  }

  onLogout() {
    this.authService.signoutUser();
  }

}
