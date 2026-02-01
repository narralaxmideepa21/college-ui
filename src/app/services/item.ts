import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';

@Injectable({
   providedIn:'root'
})





export class OrganizationService {

// private apiUrl='http://localhost:8080/api/organizations';

// constructor(private http:HttpClient){}

// saveOrganization(orgData:any):Observable<any>{
//   return this.http.post(this.apiUrl,orgData);
// }

// getCountries():Observable<string[]>{
//   return this.http.get<string[]>(`${this.apiUrl}/countries`);
// }


// getStates(country:string):Observable<string[]>{
//   return this.http.get<string[]>(this.apiUrl);
// }


// getDistricts(state:string):Observable<string[]>{
//   return this.http.get<string[]>(this.apiUrl);
// }

// getCities(district:string):Observable<string[]>{
//   return this.http.get<string[]>(this.apiUrl);
// }
 }





// export interface Organization{
//   name:string;
//   code:string;
//   logo:string;
//   address:string;
//   country:string;
//   state:string;
//   district:string;
//   city:string;
//   mandal:string;
//   pincode:string;
//   mobilenumber:string;
//   email:string;
//   licensefromDate:string;
//   licensetoDate:string;
//   active:boolean;
//   reason?:string;
// }

// @Injectable({
//   providedIn: 'root'
// })
//export class OrganizationService {}
//   //private apiUrl='https://jsonplaceholder.typicode.com/todos'; 
// private apiUrl='http://localhost:3000/organizations';

//    constructor(private http:HttpClient){}
  
   

//    getOrganzationDetails():Observable<Organization>{
//       return this.http.get<Organization>(this.apiUrl);
//    }










   //saveTimetable(timetable:any):Observable<any>{
   // return this.http.post<any>(this.apiUrl,timetable);
   //}


  //  getItems():Observable<any[]>{
  //   return of([
  //     {id:1,label:'dee'},
  //     {id:2,label:'nik'},
  //     {id:3,label:'sam'}
  //   ]);
  //         //return this.http.get<any[]>(this.apiUrl);
  //  }


