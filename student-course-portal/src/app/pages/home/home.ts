import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';
import { NotificationComponent } from '../../components/notification/notification';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CourseSummaryWidget, NotificationComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  protected studentName = 'Disha';
  protected courseName = 'Angular';
  protected courseCount = 0;
  protected isEnrolled = true;

  constructor(private readonly courseService: CourseService) {
    this.courseCount = this.courseService.getCourses().length;
  }

  ngOnInit(): void {
    console.log('HomeComponent Initialized');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent Destroyed');
  }

  protected enrollNow(): void {
    alert(`Successfully enrolled in ${this.courseName}`);
  }
}
