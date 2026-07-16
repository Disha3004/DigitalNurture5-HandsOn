import { createAction, props } from '@ngrx/store';
import { Course } from '../models/course.model';

export const loadCourses = createAction('[Courses] Load Courses');
export const loadCoursesSuccess = createAction('[Courses] Load Courses Success', props<{ courses: Course[] }>())
export const loadCoursesFailure = createAction('[Courses] Load Courses Failure', props<{ error: string }>())
export const selectCourse = createAction('[Courses] Select Course', props<{ courseId: number }>())
export const addCourse = createAction('[Courses] Add Course', props<{ course: Course }>())
export const addCourseSuccess = createAction('[Courses] Add Course Success', props<{ course: Course }>())
export const addCourseFailure = createAction('[Courses] Add Course Failure', props<{ error: string }>())
