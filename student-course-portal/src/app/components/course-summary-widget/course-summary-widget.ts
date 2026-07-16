import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-summary-widget',
  imports: [CommonModule],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css',
})
export class CourseSummaryWidget implements OnInit {
  protected totalCourses = 0;
  protected passedCourses = 0;
  protected failedCourses = 0;
  protected pendingCourses = 0;

  constructor(private readonly courseService: CourseService) {}

  ngOnInit(): void {
    const courses = this.courseService.getCourses();
    this.totalCourses = courses.length;
    this.passedCourses = courses.filter((course) => course.gradeStatus === 'passed').length;
    this.failedCourses = courses.filter((course) => course.gradeStatus === 'failed').length;
    this.pendingCourses = courses.filter((course) => course.gradeStatus === 'pending').length;
  }
}
