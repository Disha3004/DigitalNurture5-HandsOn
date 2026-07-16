import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private readonly apiUrl = 'http://localhost:3000/courses';

  constructor(private readonly http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      retry(2),
      map((courses) => courses || []),
      catchError((error) => {
        console.error('Failed to load courses', error);
        return throwError(() => new Error('Unable to load courses.'));
      })
    );
  }

  getCourseById(id: number): Observable<Course | undefined> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      retry(2),
      catchError((error) => {
        console.error('Failed to load course', error);
        return throwError(() => new Error('Unable to load course.'));
      })
    );
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course).pipe(
      retry(2),
      catchError((error) => {
        console.error('Failed to add course', error);
        return throwError(() => new Error('Unable to add course.'));
      })
    );
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${course.id}`, course).pipe(
      retry(2),
      catchError((error) => {
        console.error('Failed to update course', error);
        return throwError(() => new Error('Unable to update course.'));
      })
    );
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      retry(2),
      catchError((error) => {
        console.error('Failed to delete course', error);
        return throwError(() => new Error('Unable to delete course.'));
      })
    );
  }
}
