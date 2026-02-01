import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Authservice {
  
   constructor(private router:Router){}




login(username:string,password:string):boolean{

   if(username==='admin' && password==='admin123'){
      localStorage.setItem('isLoggedIn','true');
      localStorage.setItem('user',JSON.stringify({username}));
      return true;
   }
   return false;
}


isLoggedIn():boolean{
  return localStorage.getItem('isLoggedIn')==='true';
}


logout(){
  localStorage.clear();
  this.router.navigate(['/login']);
}





}
