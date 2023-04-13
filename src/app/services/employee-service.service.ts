import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  employees: Array<any> = [];
  constructor(private httpClient: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/employees', data);
  }

  getEmployeesList() {
    return this.httpClient.get('http://localhost:3000/employees');
  }

  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:3000/employees/${id}`);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this.httpClient.put(`http://localhost:3000/employees/${id}`, data);
  }

  addDataInArray(item: any) {
    let temp;
    temp = {
      id: item.id,
      employeeImage: item.generalDetails.employeeImage,
      fullName: item.personalDetails.fullName,
      role: item.personalDetails.role,
      type: item.personalDetails.type,
      phoneNumber: item.contactDetails.phoneNumber,
      email: item.contactDetails.email,
      skills: item.personalDetails.skills,
    };
    this.employees.push(temp);
  }

  getDataFromArray(data: any) {
    let temp;
    data.map((item: any) => {
      temp = {
        id: item.id,
        employeeImage: item.generalDetails.employeeImage,
        fullName: item.personalDetails.fullName,
        role: item.personalDetails.role,
        type: item.personalDetails.type,
        phoneNumber: item.contactDetails.phoneNumber,
        email: item.contactDetails.email,
        skills: item.personalDetails.skills,
      };
      this.employees.push(temp);
    });
  }

  deleteFromArray(id: any) {
    this.employees = this.employees.filter((item: any) => {
      return item.id != id;
    });
  }

}
