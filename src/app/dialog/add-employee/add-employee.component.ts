import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  urlLink: string = 'assets/images/profile-pic.png';

  constructor(public dialogRef: MatDialogRef<AddEmployeeComponent>) {}
}
