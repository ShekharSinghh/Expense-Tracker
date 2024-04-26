import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { ModalComponent } from 'src/app/modal/modal.component';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any[] = [];
  expenses: any;
  id: any
  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getExpense(this.data)
  }

  getExpense(data: any) {
    this.apiService.getExpense(data).subscribe((res) => {
      console.log('res', res);
      this.data = res
    });
  }

  deleteExpense(id: any) {
    this.apiService.deleteExpense(id).subscribe((res) => {
    })
    this.getExpense(this.data)
  }

  updateExpense(id: number) {
    this.apiService.updateExpense(id).subscribe((res) => {
      console.log('Updated Data', res);
    })
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id: number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: { modalText: "Are you sure you want to delete" },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteExpense(id);
      } else {
      }
    });
  }

  editExpense(id: any) {
    console.log(id);
    this.router.navigate(['add-expense/', id])
  }

}

