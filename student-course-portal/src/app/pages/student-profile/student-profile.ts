import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { selectAllCourses } from '../../store/course.selectors';
import { AppState } from '../../store/course.state';

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

  protected enrolledCourses$: Observable<Course[]>;

  constructor(private readonly store: Store<AppState>) {
    this.enrolledCourses$ = this.store.select(selectAllCourses);
  }

  ngOnInit(): void {
    this.enrolledCourses$.subscribe();
  }
}
