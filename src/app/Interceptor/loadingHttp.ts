import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { Loading } from '@services/loading';

let requestId = 0;

export const loadingHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(Loading);
  const id = ++requestId;
  loadingService.on(id);

  return next(req).pipe(
    finalize(() => loadingService.off(id))
  );
};