import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-student-profile',
  imports: [],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css',
})
export class StudentProfile implements OnInit {
  protected readonly student = {
    name: 'Aarav Sharma',
    email: 'aarav@example.com',
    major: 'Computer Science',
    semester: '6th Semester',
  };

  protected enrolledCourses: Course[] = [];

  constructor(private readonly enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.enrollmentService.getEnrolledCourses().subscribe((courses) => {
      this.enrolledCourses = courses;
    });
  }
}
