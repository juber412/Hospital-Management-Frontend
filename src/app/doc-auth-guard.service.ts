import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { DocAuthService } from './doc-auth.service';

@Injectable({
  providedIn: 'root'
})
export class DocAuthGuardService implements CanActivate {

  constructor(private docAuthService: DocAuthService, private router: Router) { }
  canActivate() {

    if (this.docAuthService.isDoctorLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['doclogin']);
      return false;
    }

  }
}
