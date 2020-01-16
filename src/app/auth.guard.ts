import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BillService } from './bill.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router:Router,
    private billService:BillService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      if(!this.billService.isloggedIn())
      {
        localStorage.clear();
        this.router.navigate(['']);
        return false;
      }
    return true;
  }
}
