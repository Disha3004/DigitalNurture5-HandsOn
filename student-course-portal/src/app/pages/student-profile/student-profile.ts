import { Component } from '@angular/core';
import { EnrollmentService } from '../../services/enrollment.service';

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

  constructor(private readonly enrollmentService: EnrollmentService) {}

  protected get enrolledCourses() {
    return this.enrollmentService.getEnrolledCourses();
  }
}
