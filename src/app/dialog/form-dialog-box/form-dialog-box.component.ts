import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-dialog-box',
  templateUrl: './form-dialog-box.component.html',
  styleUrls: ['./form-dialog-box.component.css'],
})
export class FormDialogBoxComponent {
  urlLink:string = "assets/images/profile-pic.png";

  constructor(public dialogRef: MatDialogRef<FormDialogBoxComponent>){}
}

