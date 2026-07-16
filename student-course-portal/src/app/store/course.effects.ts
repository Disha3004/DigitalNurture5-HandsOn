import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CourseService } from '../services/course.service';
import { addCourse, addCourseFailure, addCourseSuccess, loadCourses, loadCoursesFailure, loadCoursesSuccess } from './course.actions';

@Injectable()
export class CourseEffects {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCourses),
      mergeMap(() =>
        this.courseService.getCourses().pipe(
          map((courses) => loadCoursesSuccess({ courses })),
          catchError((error) => of(loadCoursesFailure({ error: error.message })))
        )
      )
    )
  );

  addCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCourse),
      mergeMap(({ course }) =>
        this.courseService.addCourse(course).pipe(
          map((createdCourse) => addCourseSuccess({ course: createdCourse })),
          catchError((error) => of(addCourseFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(private readonly actions$: Actions, private readonly courseService: CourseService) {}
}
