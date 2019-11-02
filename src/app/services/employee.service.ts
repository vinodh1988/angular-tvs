import { Injectable } from '@angular/core';
import { employee } from '../models/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

httpOptions;
current:employee[];
  constructor(private http:HttpClient) { }

  getEmployees():Observable<object>
  {
    return this.http.get("http://localhost:49383/api/Emp");
  }

  storeEmployee(obj:employee):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post("http://localhost:49383/api/Emp",obj,this.httpOptions);
  }
}
