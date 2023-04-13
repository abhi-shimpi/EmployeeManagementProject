import { Component, ViewChild, OnInit } from '@angular/core';
import { AddEmployeeComponent } from 'src/app/dialog/add-employee/add-employee.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'; // import { ViewEncapsulation } from '@angular/core';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { Observable } from 'rxjs';

export interface UserData {
  employeeImage: string;
  fullName: string;
  role: string;
  type: string;
  phoneNumber: string;
  email: string;
  skills: Array<any>;
}

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class EmployeeManagementComponent implements OnInit {
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

  constructor(
    public dialog: MatDialog,
    private empService: EmployeeServiceService
  ) {}

  ngOnInit(): void {
    this.getAllEmployeeList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openUserDialog() {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: '80%',
      height: '100%',
      position: { right: '10px', top: '0px' },
    });

    dialogRef.afterClosed().subscribe({
      next: (val: any) => {
        if (val) {
          this.dataSource = new MatTableDataSource(this.empService.employees);
        }
      },
    });
  }

  changeToCards() {
    this.visible = false;
  }

  changeToList() {
    this.visible = true;
  }

  //Edit form button
  onEditForm(data: any, id: number) {
    console.log('Edit id', id);
    let empArray;
    this.empService.getEmployeesList().subscribe({
      next: (data: any) => {
        empArray = data.find((item: any) => {
          return item.id === id;
        });
        console.log('EmpArray in edit', empArray);
        const dialogRef = this.dialog.open(AddEmployeeComponent, {
          width: '80%',
          height: '100%',
          position: { right: '10px', top: '0px' },
          data: empArray,
        });

        dialogRef.afterClosed().subscribe({
          next: (val: any) => {
            if (val) {
              this.empService.employees = [];
              this.getAllEmployeeList()
            }
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  //Get data for table
  getAllEmployeeList() {
    this.empService.getEmployeesList().subscribe({
      next: (data: any) => {
        this.empService.getDataFromArray(data);
        this.dataSource = new MatTableDataSource(this.empService.employees);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        console.log('Employee', this.empService.employees);
        console.log('DataSource', this.dataSource.data.length);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  deleteEmployee(id: number) {
    console.log('Id', id);
    this.empService.deleteEmployee(id).subscribe({
      next: () => {
        this.empService.deleteFromArray(id);
        alert('Employee deleted successfully');
        console.log('Employee deletion , index', this.empService.employees);
        this.dataSource = new MatTableDataSource(this.empService.employees);
      },
      error: (err: any) => {
        console.log('Error', err);
      },
    });
  }

  applyFilter(event: Event) {
    console.log(this.dataSource);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

// 'employeeImage',
//     'fullName',
//     'role',
//     'type',
//     'phoneNumber',
//     'email',
//     'skills',
//     'action',
