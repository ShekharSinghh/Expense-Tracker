import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../Components/dashboard/dashboard.component';
import { AddExpenseComponent } from '../Components/add-expense/add-expense.component';
import { ExpenseListComponent } from '../Components/expense-list/expense-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path:'add-expense', component:AddExpenseComponent},
  {path:'add-expense/:id', component:AddExpenseComponent},
  {path:'expense-list', component:ExpenseListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
