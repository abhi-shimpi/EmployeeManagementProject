
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent {
  urlLink: string = 'assets/profile-pic.png';
  employeeForm: FormGroup;
  role: Array<any> = ['Inter', 'sw', 'ssw'];
  gender: Array<any> = ['male', 'female'];
  bloodGroupArray: Array<any> = ['A+', 'B+'];
  fileName='';

  constructor(public dialogRef: MatDialogRef<AddEmployeeComponent>) {
    this.employeeForm = new FormGroup({
      generalDetails: new FormGroup({}),
      personalDetails: new FormGroup({
        fullName: new FormControl(null),
        dateOfBirth: new FormControl(null),
        langauge: new FormControl(null),
        skills: new FormControl(null),
        role: new FormControl(null),
        gender: new FormControl(null),
        maritalStatus: new FormControl(null),
        bloodGroup: new FormControl(null),
        type: new FormControl(null),
      }),
      contactDetails: new FormGroup({
        email: new FormControl(null),
        phoneNumber: new FormControl(null),
        currentCity: new FormControl(null),
        homeTown: new FormControl(null),
        currentAddress: new FormControl(null),
        residentialAdress: new FormControl(null),
      }),
    });
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

  //Code for Handling Chips Input
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }
}

