import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { mockInterceptor } from './Interceptor/mockHttp';
import { loadingHttpInterceptor } from './Interceptor/loadingHttp';
import { errorInterceptor } from './Interceptor/http-error';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        loadingHttpInterceptor,
        mockInterceptor,
        errorInterceptor
      ])
    ),
  ]
};
