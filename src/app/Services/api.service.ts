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
    return this.http.post(`${environment.baseURl}Expense/AddExpense`, data);
  }

  getExpense(data: any):  Observable<any>{
    return this.http.get(`${environment.baseURl}Expense/GetExpenses`, data);
  }

  // getExpensebyId(id: any):  Observable<any>{
  //   return this.http.get(`${environment.baseURl}Expense/GetExpenses?id=${id}`);
  // }

  deleteExpense(id: number): Observable<any>{
    return this.http.delete(`${environment.baseURl}Expense/DeleteExpense?id=${id}`);
  }
  
  updateExpense(id:any):  Observable<any>{
    return this.http.put(`${environment.baseURl}Expense/UpdateExpense?id=${id}`, id )
  }
}
