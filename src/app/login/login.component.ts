import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    public loginService: LoginService,
    private router: Router
  ) {}

  logout() {
    this.loginService.isLoggedIn = false;
    this.router.navigateByUrl('/');
  }
  
  login() {
    this.loginService.isLoggedIn = true;
  }
}
