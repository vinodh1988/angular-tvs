import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { project } from '../models/project';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
httpOptions;
current:project[];
  constructor(private http:HttpClient) { }

  getProjects():Observable<object>
  {
    return this.http.get("http://localhost:3050/projects");
  }

  storeProject(obj:project):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post("http://localhost:3050/projects",obj,this.httpOptions);
  }

  updateProject(obj:project,projectid):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.put("http://localhost:3050/projects/"+projectid,obj,this.httpOptions);
  }
}
