import { HttpEventType, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';

export const responseInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(tap(event => {
      if (event instanceof HttpResponse) {        
        return event.clone({
          body: {
            ...(typeof event.body === 'object' && event.body !== null ? event.body : {}),
            place: 'london'
          }
        });
      }
    return event;
  }));
};
