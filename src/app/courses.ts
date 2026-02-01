import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private apiUrl='http://localhost:3002/courses';
   private deptUrl='http://localhost:3002/departments';


  constructor(private http:HttpClient){}

  getCourses():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

 addCourse(data:any):Observable<any>{
  return this.http.post(this.apiUrl,data);
 }

   getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(this.deptUrl);
  }

}
