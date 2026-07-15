import { Routes } from '@angular/router';
import { CourseList } from './pages/course-list/course-list';
import { StudentProfile } from './pages/student-profile/student-profile';

export const routes: Routes = [
  { path: 'courses', component: CourseList },
  { path: 'profile', component: StudentProfile },
];
