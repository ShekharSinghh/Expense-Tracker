import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArrayName, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit{
data:any
expenseForm!:FormGroup

constructor(
  private formBuilder:FormBuilder,
  private apiService: ApiService,
  private route:ActivatedRoute
){
  this.expenseForm = this.formBuilder.group({
    name: [''],
    amount: ['']
   });

}

ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getExpense(id);
  });
}

getExpense(id: any) {
  this.apiService.getExpense(id).subscribe((res) => {
      console.log('Expense details:', res);
  });
}

addExpense(){
this.apiService.addExpense(this.expenseForm.value).subscribe((res)=>{
console.log('res',res);
},
error =>{
  console.log(error);
  });
}


updateExpenses(){
  const updatedData = this.expenseForm.value
this.apiService.updateExpense(updatedData).subscribe((res)=>{
console.log('Updated data', res);

})
}
onSubmit(){
console.log(this.expenseForm.value);
this.reset();
}

reset(){
this.expenseForm.reset();
}
}