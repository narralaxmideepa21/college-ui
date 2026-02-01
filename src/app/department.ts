import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  
  private deptUrl='http://localhost:3002/departments';

  constructor(private http:HttpClient){}


  getAll():Observable<any[]>{
    return this.http.get<any[]>(this.deptUrl);
  }

 update(id:number,data:any):Observable<any>{
    return this.http.put(`${this.deptUrl}/${id}`,data);
 }
 
 save(data:any):Observable<any>{
  return this.http.post(this.deptUrl,data);
 }

 delete(id:number):Observable<any>{
  return this.http.delete(`${this.deptUrl}/${id}`);
 }





}
