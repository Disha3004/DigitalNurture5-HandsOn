import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';
import { loadCourses } from '../../store/course.actions';
import { selectAllCourses } from '../../store/course.selectors';
import { AppState } from '../../store/course.state';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, FormsModule, RouterLink, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  protected readonly courses$: Observable<Course[]>;
  protected searchText = '';
  protected selectedCategory = 'All';
  protected showAvailableOnly = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly store: Store<AppState>
  ) {
    this.courses$ = this.store.select(selectAllCourses);
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.searchText = params.get('search') ?? '';
    });

    this.store.dispatch(loadCourses());
  }

  protected get filteredCourses(): Course[] {
    return [];
  }

  protected search(): void {
    this.router.navigate(['/courses'], {
      queryParams: { search: this.searchText },
    });
  }

  protected get uniqueStatuses(): string[] {
    return ['All', 'passed', 'failed', 'pending'];
  }
}
