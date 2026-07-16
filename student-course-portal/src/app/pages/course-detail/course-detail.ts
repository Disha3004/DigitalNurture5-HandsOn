import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail implements OnInit {
  protected course: Course | null = null;
  protected errorMessage = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (Number.isNaN(id)) {
        this.errorMessage = 'Invalid course id.';
        return;
      }

      this.courseService.getCourseById(id).subscribe({
        next: (course) => {
          this.course = course ?? null;
          this.errorMessage = course ? '' : 'Course not found.';
        },
        error: () => {
          this.errorMessage = 'Unable to load course.';
        },
      });
    });
  }
}
