import { Component } from '@angular/core';
import { AddEmployeeComponent } from 'src/app/dialog/add-employee/add-employee.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeeManagementComponent {
  cardDetailsArr: Array<any> = [
    {
      cardSubtitle: 'All Employees',
      cardTitle: '100',
      cardimage: 'perm_identity',
    },
    {
      cardSubtitle: 'Permanent Employees',
      cardTitle: '100',
      cardimage: 'work_outline',
    },
    {
      cardSubtitle: 'Interns',
      cardTitle: '100',
      cardimage: 'assignment_ind',
    },
  ];

  constructor(public dialog: MatDialog) {}

  openUserDialog()
   {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: '70%',

      height: '100vh',

      position: { right: '10px', top: '0px' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
}
