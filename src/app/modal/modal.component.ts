import { Component, Inject, Input } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() modalText: string;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalText = data.modalText;
  }
}
