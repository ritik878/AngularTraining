import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const newReq = req.clone({
    headers: req.headers.append('X-Authentication-Token', "Bearer hiiibearer"),
  });
  return next(newReq);
};
