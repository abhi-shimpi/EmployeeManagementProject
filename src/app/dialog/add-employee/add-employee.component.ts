
import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  urlLink: string = 'assets/profile-pic.png';
  role: Array<any> = ['Inter', 'sw', 'ssw'];
  gender: Array<any> = ['male', 'female'];
  bloodGroupArray: Array<any> = ['A+', 'B+'];

  //For Multiple skills selection
  skillsArray = [
    { id: 1, name: 'Communication' },
    { id: 2, name: 'Coding' },
    { id: 4, name: 'Public Speaking' },
    { id: 5, name: 'Marketing' },
  ];
  selectedSkillIds = [];

  fileName = '';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.employeeForm = this.fb.group({
      generalDetails: this.fb.group({
        profilePhoto: '',
        departmentName: '',
        role: '',
        joiningDate: '',
      }),
      personalDetails: this.fb.group({
        fullName: '',
        dateOfBirth: '',
        langauge: '',
        skills: this.fb.array([this.selectedSkillIds]),
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
    console.log(this.data);
    this.employeeForm.patchValue(this.data);
  }
  updateProfileImage(event: any) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.urlLink = event.target.result;
      };
    }
  }

  //Code for adding employee
  onFormSubmit() {
    console.log(this.employeeForm.value);
  }
}

