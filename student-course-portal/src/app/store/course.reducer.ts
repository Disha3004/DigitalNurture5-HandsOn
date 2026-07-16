import { createReducer, on } from '@ngrx/store';
import { Course } from '../models/course.model';
import { addCourse, addCourseFailure, addCourseSuccess, loadCourses, loadCoursesFailure, loadCoursesSuccess, selectCourse } from './course.actions';

export interface CourseState {
  courses: Course[];
  selectedCourseId: number | null;
  loading: boolean;
  error: string | null;
}

export const initialCourseState: CourseState = {
  courses: [],
  selectedCourseId: null,
  loading: false,
  error: null,
};

export const courseReducer = createReducer(
  initialCourseState,
  on(loadCourses, (state) => ({ ...state, loading: true, error: null })),
  on(loadCoursesSuccess, (state, { courses }) => ({ ...state, courses, loading: false, error: null })),
  on(loadCoursesFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(selectCourse, (state, { courseId }) => ({ ...state, selectedCourseId: courseId })),
  on(addCourse, (state) => ({ ...state, loading: true, error: null })),
  on(addCourseSuccess, (state, { course }) => ({ ...state, courses: [...state.courses, course], loading: false, error: null })),
  on(addCourseFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
