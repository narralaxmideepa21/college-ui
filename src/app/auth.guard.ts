import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { Authservice } from './authservice';

@Injectable({
  providedIn: 'root',
})
export class Authguard implements CanActivate {
  
constructor(private auth:Authservice,private router:Router){}


 canActivate():boolean {
  const loggedIn = this.auth.isLoggedIn();
  console.log('guard checked:',loggedIn);

       if(loggedIn){
         return true;
       }
         this.router.navigate(['/login']);
         return false; 
   }
}
