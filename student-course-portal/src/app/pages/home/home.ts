import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';
import { NotificationComponent } from '../../components/notification/notification';
import { Course } from '../../models/course.model';
import { loadCourses } from '../../store/course.actions';
import { selectAllCourses, selectCourseLoading } from '../../store/course.selectors';
import { AppState } from '../../store/course.state';

@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterLink, CourseSummaryWidget, NotificationComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  protected studentName = 'Disha';
  protected courseName = 'Angular';
  protected courseCount = 0;
  protected isEnrolled = true;
  protected readonly courses$: Observable<Course[]>;
  protected readonly loading$: Observable<boolean>;

  constructor(private readonly store: Store<AppState>) {
    this.courses$ = this.store.select(selectAllCourses);
    this.loading$ = this.store.select(selectCourseLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
    this.courses$.subscribe((courses) => {
      this.courseCount = courses.length;
    });
  }

  ngOnDestroy(): void {
    console.log('HomeComponent Destroyed');
  }

  protected enrollNow(): void {
    alert(`Successfully enrolled in ${this.courseName}`);
  }
}
