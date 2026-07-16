import { ActionReducerMap } from '@ngrx/store';
import { CourseState, courseReducer } from './course.reducer';

export interface AppState {
  courses: CourseState;
}

export const reducers: ActionReducerMap<AppState> = {
  courses: courseReducer,
};
