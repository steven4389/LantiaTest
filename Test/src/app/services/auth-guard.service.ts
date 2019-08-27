import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { UserService } from './user.service'

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private _UserService: UserService, private router: Router) {}

  canActivate() {
    // If the user is not logged in we'll send them back to the home page
    if (this._UserService.getUserLoggedIn() == null) {
        console.log('No estás logueado');
        this.router.navigate(['/login']);
        return false;
    }

    return true;
}
}
