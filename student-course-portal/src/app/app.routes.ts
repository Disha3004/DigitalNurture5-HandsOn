import { Routes } from '@angular/router';
import { CourseList } from './pages/course-list/course-list';
import { StudentProfile } from './pages/student-profile/student-profile';
import { StudentRegistration } from './pages/student-registration/student-registration';

export const routes: Routes = [
  { path: 'courses', component: CourseList },
  { path: 'register', component: StudentRegistration },
  { path: 'profile', component: StudentProfile },
];
