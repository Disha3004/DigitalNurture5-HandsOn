import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

// Singleton Service: Angular creates one shared instance for the app when
// `providedIn: 'root'` is used.
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private readonly courses: Course[] = [
    { id: 101, name: 'Angular Fundamentals', code: 'ANG101', credits: 3, gradeStatus: 'passed' },
    { id: 102, name: 'React Mastery', code: 'REA102', credits: 4, gradeStatus: 'pending' },
    { id: 103, name: 'Spring Boot Essentials', code: 'SPR103', credits: 3, gradeStatus: 'passed' },
    { id: 104, name: 'Java for Professionals', code: 'JAV104', credits: 4, gradeStatus: 'failed' },
    { id: 105, name: 'Python Data Science', code: 'PYT105', credits: 3, gradeStatus: 'pending' },
    { id: 106, name: 'SQL for Beginners', code: 'SQL106', credits: 2, gradeStatus: 'passed' },
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find((course) => course.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
}
