import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let message = 'An unexpected error occurred.';

        if (error.status === 401) {
          message = 'Unauthorized. Please sign in again.';
        } else if (error.status === 404) {
          message = 'Resource not found.';
        } else if (error.status === 500) {
          message = 'Server error. Please try again later.';
        }

        console.error(message, error);
        return throwError(() => new Error(message));
      })
    );
  }
}
