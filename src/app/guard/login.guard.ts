import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../service/login.service';

export const canActivateLoggedIn: CanActivateFn = 
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(LoginService).isLoggedIn;
    };