import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Forms/login/login.component'; 
import { RegisterComponent } from './Forms/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddExpenseComponent } from './Components/add-expense/add-expense.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ExpenseListComponent } from './Components/expense-list/expense-list.component';
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddExpenseComponent,
    DashboardComponent,
    ExpenseListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
