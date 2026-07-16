import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  @Input() course!: Course;

  constructor(private readonly enrollmentService: EnrollmentService) {}

  protected toggleEnrollment(): void {
    if (this.enrollmentService.isEnrolled(this.course.id)) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
    }
  }

  protected isEnrolled(): boolean {
    return this.enrollmentService.isEnrolled(this.course.id);
  }
}
