import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  imports: [],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  protected readonly courses = [
    { title: 'Angular Fundamentals', instructor: 'Asha Rao' },
    { title: 'REST APIs with Spring Boot', instructor: 'Dinesh Kumar' },
    { title: 'Cloud Deployment Basics', instructor: 'Neha Singh' },
  ];
}
