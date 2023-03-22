import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http:HttpClient) { }


  emp(){
    let url = "http://localhost:8000/employees";
    return this.http.get<any>(url);
  }
}
