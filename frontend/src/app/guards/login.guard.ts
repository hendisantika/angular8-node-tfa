import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements {
  constructor(private _loginService: LoginServiceService, private _router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (!this._loginService.getAuthStatus()) {
      return true;
    }

    this._router.navigate(['/home']);
    return false;
  }
}
