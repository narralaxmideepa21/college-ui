import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyRow } from '../app';



//  export interface PeriodicElement{
//     position: number;
//      name: string;
//      weight: number;
//      symbol: string;

//  }
@Injectable({
  providedIn: 'root',
})


export class PeriodicService {
  //private apiUrl ='https://your-api.com/periodic';
  //private apiUrl = 'http://localhost:3000/periodic';

    // private apiUrl = 'https://your-api-url.com/users'; // ⬅ replace with your API
    private apiUrl='https://jsonplaceholder.typicode.com/users';


  private http = inject(HttpClient);

  getUsers():Observable<MyRow[]>{
     return this.http.get<MyRow[]>(this.apiUrl);
  }

  // addPeriodicData(newRow:any):Observable<MyRow>{
  //   return this.http.post<MyRow>(this.apiUrl,newRow);
  // }

  // updatePeriodicData(id:any):Observable<MyRow>{
  //    return this.http.put<MyRow>(this.apiUrl,`${id}`);
  // }
  
  // deletePeriodicData(id:any):Observable<any>{
  //    return this.http.delete<MyRow>(this.apiUrl)
  // }
}


