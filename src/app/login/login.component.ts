import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public loginService: LoginService) {}

  logout() {
    this.loginService.isLoggedIn = false;
  }
  
  login() {
    this.loginService.isLoggedIn = true;
  }
}
