import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentServices {
  

private url='http://localhost:3002/students';

constructor(private http:HttpClient){}

//get all students
getAll():Observable<any[]>{
   return this.http.get<any[]>(this.url);
}

//add new student
add(data:any):Observable<any>{
  return this.http.post<any>(this.url,data);
}

//update existing student
update(id:number,data:any):Observable<any>{
  return this.http.put<any>(`${this.url}/${id}`,data);
}











  
}
