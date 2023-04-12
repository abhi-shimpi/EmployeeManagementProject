import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { AddEmployeeComponent } from 'src/app/dialog/add-employee/add-employee.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'; // import { ViewEncapsulation } from '@angular/core';

export interface UserData {
  employeeImage:string,
  fullName: string;
  role: string;
  type: string;
  phoneNumber: string;
  email: string;
  skills:string;
}

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss'],
  // encapsulation: ViewEncapsulation.None,
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

  //Condition
  visible: boolean = true;
  // For Cards
  cardData = [
    {
      profileImage: '../../../assets/profile-pic.png',
      employeeName: 'Abhishek Shimpi',
      employeeType: 'Intern',
      employeeEmail: 'abhi@gmail.com',
      employeeCall: '+91 7867345790',
    },
    {
      profileImage: '../../../assets/profile-pic.png',
      employeeName: 'Abhishek Shimpi',
      employeeType: 'Intern',
      employeeEmail: 'abhi@gmail.com',
      employeeCall: '+91 7867345790',
    },
    {
      profileImage: '../../../assets/profile-pic.png',
      employeeName: 'Abhishek Shimpi',
      employeeType: 'Intern',
      employeeEmail: 'abhi@gmail.com',
      employeeCall: '+91 7867345790',
    },
    {
      profileImage: '../../../assets/profile-pic.png',
      employeeName: 'Abhishek Shimpi',
      employeeType: 'Intern',
      employeeEmail: 'abhi@gmail.com',
      employeeCall: '+91 7867345790',
    },
    {
      profileImage: '../../../assets/profile-pic.png',
      employeeName: 'Abhishek Shimpi',
      employeeType: 'Intern',
      employeeEmail: 'abhi@gmail.com',
      employeeCall: '+91 7867345790',
    },
    {
      profileImage: '../../../assets/profile-pic.png',
      employeeName: 'Abhishek Shimpi',
      employeeType: 'Intern',
      employeeEmail: 'abhi@gmail.com',
      employeeCall: '+91 7867345790',
    },
    {
      profileImage: '../../../assets/profile-pic.png',
      employeeName: 'Abhishek Shimpi',
      employeeType: 'Intern',
      employeeEmail: 'abhi@gmail.com',
      employeeCall: '+91 7867345790',
    },
    {
      profileImage: '../../../assets/profile-pic.png',
      employeeName: 'Abhishek Shimpi',
      employeeType: 'Intern',
      employeeEmail: 'abhi@gmail.com',
      employeeCall: '+91 7867345790',
    },
  ];

  //Fake User Data for table
  users = [
    {
      employeeImage: '../../../assets/MyImage.jpeg',
      fullName: 'Bbhishek',
      role: 'Intern',
      type: 'Intern',
      phoneNumber: '7899093456',
      email: 'abhi@gmail.com',
      skills: 'Angular',
    },
    {
      employeeImage: '../../../assets/MyImage.jpeg',
      fullName: 'Abhishek',
      role: 'Intern',
      type: 'Intern',
      phoneNumber: '7899093456',
      email: 'abhi@gmail.com',
      skills: 'Angular',
    },
    {
      employeeImage: '../../../assets/MyImage.jpeg',
      fullName: 'Abhishek',
      role: 'Intern',
      type: 'Intern',
      phoneNumber: '7899093456',
      email: 'abhi@gmail.com',
      skills: 'Angular',
    },
    {
      employeeImage: '../../../assets/MyImage.jpeg',
      fullName: 'Abhishek',
      role: 'Intern',
      type: 'Intern',
      phoneNumber: '7899093456',
      email: 'abhi@gmail.com',
      skills: 'Angular',
    },
    {
      employeeImage: '../../../assets/MyImage.jpeg',
      fullName: 'Abhishek',
      role: 'Intern',
      type: 'Intern',
      phoneNumber: '7899093456',
      email: 'abhi@gmail.com',
      skills: 'Angular',
    },
  ];

  displayedColumns: any[] = [
    'employeeImage',
    'fullName',
    'role',
    'type',
    'phoneNumber',
    'email',
    'skills',
    'action',
  ];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openUserDialog() {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: '80%',
      height: '100%',
      position: { right: '10px', top: '0px' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  changeToCards() {
    this.visible = false;
  }

  changeToList() {
    this.visible = true;
  }

  //Edit form button
  onEditForm(data: any) {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: '80%',
      height: '100%',
      position: { right: '10px', top: '0px' },
      data,
    });
  }
}
