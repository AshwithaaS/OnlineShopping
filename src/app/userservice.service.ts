import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private saveURL = "http://localhost:8080/user/api/merchants";

  constructor(private httpClient: HttpClient) { }
  
  getAllMerchants(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.saveURL}`);
  }

  createMerchant(user:User): Observable<Object>{
    return this.httpClient.post(`${this.saveURL}`, user);
  }

  // getEmployeeById(id: number): Observable<Employee>{
  //   return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  // }

  // updateEmployee(id: number, employee: Employee): Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  // }

  deleteMerchants(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.saveURL}/${id}`);
  }
}
