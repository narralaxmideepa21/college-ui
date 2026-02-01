import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id?: number;
  fullName: string;
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root',
})
export class LoginService {

      private apiUrl = 'http://localhost:8085/api/users'; // Spring Boot URL


  constructor(private http:HttpClient){}
  //Signup page
  register(user:User):Observable<any>{
    return this.http.post(`${this.apiUrl}/register`,user);
  }


      //Login page
     login(credentials:{email:string;password:string}): Observable<any> {
         return this.http.post(`${this.apiUrl}/login`, credentials);
    }


      //get all users
      getAllUsers(): Observable<User[]> {
          return this.http.get<User[]>(this.apiUrl);
      }

}
