import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { authGuard } from './guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';
import { CourseDetail } from './pages/course-detail/course-detail';
import { CourseList } from './pages/course-list/course-list';
import { CoursesLayout } from './pages/courses-layout/courses-layout';
import { NotFound } from './pages/not-found/not-found';
import { StudentProfile } from './pages/student-profile/student-profile';
import { StudentRegistration } from './pages/student-registration/student-registration';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'courses',
    component: CoursesLayout,
    children: [
      { path: '', component: CourseList },
      { path: ':id', component: CourseDetail },
    ],
  },
  { path: 'register', component: StudentRegistration },
  {
    path: 'enroll',
    loadChildren: () => import('./pages/enrollment/enrollment.routes').then((m) => m.enrollmentRoutes),
    canActivate: [authGuard],
  },
  {
    path: 'profile',
    component: StudentProfile,
    canActivate: [authGuard],
  },
  { path: '**', component: NotFound },
];
