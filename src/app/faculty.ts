import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacultyServices {
  private apiUrl='http://localhost:3002/faculty';

constructor(private http:HttpClient){}


getFaculty():Observable<any[]>{
  return this.http.get<any[]>(this.apiUrl);
}

addFaculty(data:any):Observable<any>{
  return this.http.post(this.apiUrl,data);
}

updateFaculty(id:number,data:any):Observable<any>{
  return this.http.put(`${this.apiUrl}/${id}`,data);
}

delete(id:number):Observable<any>{
  return this.http.delete<any>(`${this.apiUrl}/${id}`);
}










}
