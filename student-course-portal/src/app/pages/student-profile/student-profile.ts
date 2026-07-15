import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  imports: [],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css',
})
export class StudentProfile {
  protected readonly student = {
    name: 'Aarav Sharma',
    email: 'aarav@example.com',
    major: 'Computer Science',
    semester: '6th Semester',
  };
}
