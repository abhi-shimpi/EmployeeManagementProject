import { Component, Inject, OnInit ,ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { MAT_DATE_FORMATS } from '@angular/material/core';

//for date format
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }],
  encapsulation:ViewEncapsulation.None
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  selectedFile: any;
  urlLink: string = 'assets/profile-pic.png';
  role: Array<any> = ['Inter', 'sw', 'ssw'];
  gender: Array<any> = ['male', 'female'];
  bloodGroupArray: Array<any> = ['A+', 'B+'];

  //For Multiple skills selection
  dropdownList: any;
  dropdownSettings: any;

  fileName = '';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private empService: EmployeeServiceService
  ) {
    this.employeeForm = this.fb.group({
      generalDetails: this.fb.group({
        profilePhoto: '',
        departmentName: '',
        roleName: '',
        joiningDate: '',
      }),
      personalDetails: this.fb.group({
        fullName: ['', Validators.required],
        dateOfBirth:'' ,
        langauge: '',
        skills: ['', Validators.required],
        role: ['', Validators.required],
        gender: '',
        maritalStatus: '',
        bloodGroup: '',
        type: ['', Validators.required],
      }),
      contactDetails: this.fb.group({
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
        ],
        phoneNumber: [
          '',
          [
            Validators.required,
            Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
          ],
        ],
        currentCity: '',
        homeTown: '',
        currentAddress: '',
        residentialAdress: '',
      }),
      imageFile: this.fb.control(''),
    });
  }

  ngOnInit(): void {
    console.log('Edit Data in ngOnInit', this.data);
    this.employeeForm.patchValue(this.data);

    this.dropdownList = this.getData();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'itemText',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
    };
  }

  onItemSelect($event: any) {
    console.log('$event is ', $event);
  }
  getData(): Array<any> {
    return [
      { id: 1, itemText: 'Wireframes' },
      { id: 2, itemText: 'Prototype' }, 
    ];
  }

  //Upload Image
  inputFile(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.urlLink = reader.result as string;
        this.employeeForm
          .get('generalDetails.profilePhoto')
          ?.setValue(this.urlLink);
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      this.employeeForm.get('generalDetails.profilePhoto')?.setValue(null);
      this.urlLink = '';
    }
    console.log(event.target.files);
   
  }

  //Code for adding employee
  onFormSubmit() {
    if (this.data) {
      console.log(this.data.id);
      this.empService
        .updateEmployee(this.data.id, this.employeeForm.value)
        .subscribe({
          next: (data: any) => {
            console.log('data in Update', data);
            alert('Employee details updated!');
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      console.log(this.employeeForm.value);
    } else {


      const payLoad = this.employeeForm.getRawValue();
      console.log(payLoad);
      console.log("Employee Form",this.employeeForm.value);
      
      
      this.empService.addDataInArray(this.employeeForm.value);
      this.empService.addEmployee(this.employeeForm.value).subscribe({
        next: (response: any) => {
          this.urlLink = response['imageFile'];
          console.log('Data after upload', response);
          alert('Employee added successfully');
          this.dialogRef.close(true);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }
}
