import { Injectable } from '@angular/core';
import { CanLoad, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
// import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if((localStorage.getItem('token') == undefined)) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
  }


  
  
}
