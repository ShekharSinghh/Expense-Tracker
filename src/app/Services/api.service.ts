import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  
  ) { }

  addExpense(data: any):  Observable<any>{
    return this.http.post(`${environment.baseURl}Expense`, data);
  }

  getExpense(data: any):  Observable<any>{
    return this.http.get(`${environment.baseURl}Expense`, data);
  }

  deleteExpense(id:any):  Observable<any>{
    return this.http.delete(`${environment.baseURl}Expense/${id}` )
  }

  updateExpense(id:any):  Observable<any>{
    return this.http.put(`${environment.baseURl}Expense/${id}`, id )
  }
}
