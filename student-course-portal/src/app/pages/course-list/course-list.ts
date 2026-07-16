import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, FormsModule, RouterLink, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  protected courses: Course[] = [];
  protected searchText = '';
  protected selectedCategory = 'All';
  protected showAvailableOnly = false;

  constructor(
    private readonly courseService: CourseService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.searchText = params.get('search') ?? '';
    });

    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  protected get filteredCourses(): Course[] {
    return this.courses.filter((course) => {
      const matchesSearch =
        course.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        course.code.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesCategory = this.selectedCategory === 'All' || course.gradeStatus === this.selectedCategory.toLowerCase();
      const matchesAvailability = !this.showAvailableOnly || course.gradeStatus !== 'failed';
      return matchesSearch && matchesCategory && matchesAvailability;
    });
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
