import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // some error handling maybe toast(outside of scope of test) etc but it assumes some global backend error handling and error format which we dont have so i will just rethrow the error for now;

      return throwError(() => error);
    })
  );
};