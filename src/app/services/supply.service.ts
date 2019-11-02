import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  constructor(private http:HttpClient) { }

  getSupplyMaster():Observable<object>{
     return this.http.get("http://localhost:49383/api/supplymasters/All");
  }

  getProducts():Observable<object>{
     return this.http.get("http://localhost:49383/api/supplymasters/GroupProduct");
  }
}
