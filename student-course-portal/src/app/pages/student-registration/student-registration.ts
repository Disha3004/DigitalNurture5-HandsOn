import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  imports: [CommonModule, FormsModule],
  templateUrl: './student-registration.html',
  styleUrl: './student-registration.css',
})
export class StudentRegistration {
  protected student = {
    fullName: '',
    email: '',
    mobile: '',
    age: null as number | null,
    gender: '',
    course: '',
    address: '',
    termsAccepted: false,
  };

  protected submittedStudent: any = null;

  protected onSubmit(form: any): void {
    if (form.valid) {
      this.submittedStudent = { ...this.student };
      console.log('Submitted Student Data:', this.submittedStudent);
      alert('Student Registered Successfully!');
      form.resetForm();
      this.student = {
        fullName: '',
        email: '',
        mobile: '',
        age: null,
        gender: '',
        course: '',
        address: '',
        termsAccepted: false,
      };
    }
  }

  protected resetForm(form: any): void {
    form.resetForm();
    this.student = {
      fullName: '',
      email: '',
      mobile: '',
      age: null,
      gender: '',
      course: '',
      address: '',
      termsAccepted: false,
    };
    this.submittedStudent = null;
  }
}
