import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { Course } from '../models/course.model';
import { CourseService } from './course.service';

// Dependency Injection: Angular injects the shared CourseService into this
// service to resolve enrolled course ids into real Course objects.
@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  private enrolledCourseIds: number[] = [];

  constructor(private readonly courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter((id) => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses(): Observable<Course[]> {
    return of(this.enrolledCourseIds).pipe(
      switchMap((ids) => this.courseService.getCourses().pipe(map((courses) => courses.filter((course) => ids.includes(course.id)))))
    );
  }
}
