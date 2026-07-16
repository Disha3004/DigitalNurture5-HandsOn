import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './course.reducer';

export const selectCourseState = createFeatureSelector<CourseState>('courses');

export const selectAllCourses = createSelector(selectCourseState, (state) => state.courses);
export const selectCourseLoading = createSelector(selectCourseState, (state) => state.loading);
export const selectCourseError = createSelector(selectCourseState, (state) => state.error);
export const selectSelectedCourseId = createSelector(selectCourseState, (state) => state.selectedCourseId);
export const selectSelectedCourse = createSelector(selectAllCourses, selectSelectedCourseId, (courses, selectedCourseId) =>
  courses.find((course) => course.id === selectedCourseId) ?? null
);
