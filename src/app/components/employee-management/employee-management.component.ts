import { Component, ViewChild, OnInit } from '@angular/core';
import { AddEmployeeComponent } from 'src/app/dialog/add-employee/add-employee.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'; // import { ViewEncapsulation } from '@angular/core';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { Observable } from 'rxjs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { number } from 'echarts';

export interface UserData {
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
  length!: number;

  cardDetailsArr: Array<any> = [
    {
      cardSubtitle: 'All Employees',
      cardTitle: '100',
      cardimage: '../../../assets/card1.svg',
    },
    {
      cardSubtitle: 'Permanent',
      cardTitle: '70',
      cardimage: '../../../assets/card2.svg',
    },
    {
      cardSubtitle: 'Interns',
      cardTitle: '30',
      cardimage: '../../../assets/card3.svg',
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
  ];

  //Fake User Data for table

  displayedColumns: any[] = [
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
    public empService: EmployeeServiceService
  ) {}

  ngOnInit(): void {
    this.getAllEmployeeList();
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
          this.length = this.dataSource.data.length;
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
    let employeeData;
    this.empService.getEmployeesList().subscribe({
      next: (data: any) => {
        employeeData = data.find((item: any) => {
          return item.id === id;
        });
        console.log('EmpArray in edit', employeeData);
        const dialogRef = this.dialog.open(AddEmployeeComponent, {
          width: '80%',
          height: '100%',
          position: { right: '10px', top: '0px' },
          data: employeeData,
        });

        dialogRef.afterClosed().subscribe({
          next: (val: any) => {
            if (val) {
              this.getAllEmployeeList();
              this.length = this.dataSource.data.length;
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
        console.log('Data got from edit component', data);
        this.empService.getDataFromArray(data);
        this.dataSource = new MatTableDataSource(this.empService.employees);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.length = this.dataSource.data.length;
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
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.length = this.dataSource.data.length;
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
