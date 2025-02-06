import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = 'http://localhost:8080';
  const baseUrlReq = req.clone({
    url: `${baseUrl}${req.url}`,
  });
  return next(baseUrlReq);
};
