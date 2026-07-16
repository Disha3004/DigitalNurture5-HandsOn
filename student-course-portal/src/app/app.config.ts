import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { CourseEffects } from './store/course.effects';
import { reducers } from './store/course.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore(reducers),
    provideEffects([CourseEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
    provideHttpClient(
      withInterceptors([
        (req, next) => {
          const token = localStorage.getItem('token') ?? 'demo-token';
          const authReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
          return next(authReq);
        },
      ])
    ),
  ],
};
