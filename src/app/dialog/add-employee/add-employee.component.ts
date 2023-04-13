import {  Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
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
    private empService: EmployeeServiceService,
  ) {
    this.employeeForm = this.fb.group({
      generalDetails: this.fb.group({
        profilePhoto: [null],
        departmentName: '',
        role: '',
        joiningDate: '',
      }),
      personalDetails: this.fb.group({
        fullName: '',
        dateOfBirth: '',
        langauge: '',
        skills: ['', [Validators.required]],
        role: '',
        gender: '',
        maritalStatus: '',
        bloodGroup: '',
        type: '',
      }),
      contactDetails: this.fb.group({
        email: '',
        phoneNumber: '',
        currentCity: '',
        homeTown: '',
        currentAddress: '',
        residentialAdress: '',
      }),
    });
  }

  ngOnInit(): void {
    console.log('Edit Data in ngOnInit', this.data);
    this.employeeForm.patchValue(this.data);

    this.dropdownList = this.getData();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
    };
  }

  onItemSelect($event: any) {
    console.log('$event is ', $event);
  }
  getData(): Array<any> {
    return [
      { item_id: 1, item_text: 'Communication Skills' },
      { item_id: 2, item_text: 'Coding' },
      { item_id: 3, item_text: 'Designing' },
      { item_id: 4, item_text: 'Sales' },
      { item_id: 5, item_text: 'Marketing' },
    ];
  }

  //Upload Image
  updateProfileImage(event: any) {
    
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.urlLink = reader.result as string;
        this.employeeForm.get('generalDetails.profilePhoto')?.setValue(this.urlLink);
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      this.employeeForm.get('generalDetails.profilePhoto')?.setValue(null);
      this.urlLink = '';
    }
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
      const formData = new FormData();
      formData.append('profilePhoto',this.selectedFile);
      console.log(formData.get('profilePhoto'));
     
      this.empService.addDataInArray(this.employeeForm.value);
      this.empService.addEmployee(this.employeeForm.value).subscribe({
        next: () => {
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
