import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArrayName, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit{

  data:any
categoryForm!:FormGroup

constructor(
  private formBuilder:FormBuilder,
  private apiService: ApiService
){}

ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
     name: ['sfsd'],
     urlHandle: ['']
    })
}

addExpense(){
this.apiService.addExpense(this.categoryForm.value).subscribe((res)=>{
console.log('res',res);

},
error =>{
  console.log(error);
  
});
}

onSubmit(){
console.log(this.categoryForm.value);
}
}