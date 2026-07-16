import { courseReducer, initialCourseState } from './course.reducer';
import { loadCourses, loadCoursesSuccess } from './course.actions';
import { Course } from '../models/course.model';

describe('courseReducer', () => {
  it('should set loading true on loadCourses', () => {
    const state = courseReducer(initialCourseState, loadCourses());
    expect(state.loading).toBeTrue();
  });

  it('should add courses on success', () => {
    const course: Course = { id: 2, name: 'Redux Basics', code: 'RED2', credits: 2, gradeStatus: 'passed' };
    const state = courseReducer(initialCourseState, loadCoursesSuccess({ courses: [course] }));
    expect(state.courses.length).toBe(1);
    expect(state.courses[0].name).toBe('Redux Basics');
  });
});
