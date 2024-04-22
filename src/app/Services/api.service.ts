import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  
  ) { }

  addExpense(data: any){
    return this.http.post<any>( 'https://localhost:7121/api/Categories', data);
  }
}
