import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
data:any[]=[];
  expenses: any;
  constructor(
    private apiService: ApiService,
  ) {}

  
  getExpense(data:any){
    this.apiService.getExpense(data).subscribe((res) =>{
      console.log('res',res);
      this.data = res
    });
  }

  deleteExpense(id:number){
    this.apiService.deleteExpense(id).subscribe((res)=>{
      console.log('delete', res);
      
    })
  }
  ngOnInit(): void {
     this.getExpense(this.data) 
  }
}
